import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db from '../firebase'
import './PlanScreen.css'
import {loadStripe} from '@stripe/stripe-js'

function PlanScreen() {

  const [products, setProducts] = useState([])
  const user = useSelector(selectUser)

  /* To retrieve the subscription data of the user */
  const [subscription, setSubscription] = useState(null)

  useEffect(()=> {
    const info = async() => db.collection("customers")
                            .doc(user.uid)
                            .collection('subscriptions')
                            .get()
                            .then(querySnapshot => {

                              /* querySnapshot represents the result of a query */
                              /* loop through forEach subscriptions and retrieve the role attribute, current period start and end */
                              querySnapshot.forEach( async subscription => {
                                setSubscription({
                                  role: subscription.data().role,
                                  current_period_end: subscription.data().current_period_end.seconds,
                                  current_period_start: subscription.data().current_period_start.seconds,
                                });
                              });
                              info()
                            });
  }, [])

  /* fetch the plans from the database */
  /* The documents can be accessed as an array via the docs property or enumerated using the forEach method.  */
  /* https://console.firebase.google.com/project/netflix2-clone-e95d8/firestore/data~2Fproducts~2Fprod_JT3hRI7rwmgJfh */
  /* The 'products' and 'active' attribute is displayed in the link above */
  useEffect(() => {
    const info = async() => db.collection('products')
                              .where('active', '==', true)
                              .get()
                              .then((querySnapshot) => {
                                const products = {};
                                querySnapshot.forEach(async (productDoc) => {
                                  products[productDoc.id] = productDoc.data();
                                  const priceSnap = await productDoc.ref.collection('prices').get();
                                  priceSnap.docs.forEach((price) => {
                                    products[productDoc.id].prices = {
                                      priceId: price.id,
                                      priceData: price.data(),
                                    };
                                  });
                                });
                                setProducts(products);
                                info(); //To unscribe 
                              });
  },[]);

  console.log("The products are: ", products) /* Returns an object */
  console.log("Subscription is: ", subscription)

  /* function to render the checkout/paying screen */
  const loadCheckout = async (priceId) => {
    //pulling the user from the redux store
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      })

      docRef.onSnapshot(async(snap) => {
        const {error, sessionId} = snap.data();

        if (error){
          //show an error to your customer and inspect your Cloud Function logs in the Firebase console
          alert(`An error occured: ${error.message}`)
        }

        if (sessionId){
          //We have a session, lets redirect to Checkout
          //Initialise stripe

          const strip = await loadStripe('pk_test_51IpNyNFws4ncZVjIE5PzlqMhXPP780p2H9hetmUSWL48bAnpSxUwzAmikcBNhORCyfolUWnt8dAs4gvlMEvKY6IJ00IUI0r1Gh');
          strip.redirectToCheckout({sessionId});
        }
      });
  };

  return (
    <div className="planScreen">

      {/* Renewal date */}
      {/* We only want to render the renewal date if we have the subscriptiond data */}
      <br></br>
      {subscription && (
        <p>
          Renewal data: {" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}

      {/* Need to map through an object */}
      {/* Object.entries() will return a key-value pair in an array */}
      {/* ​Object.keys(objectName).map( key => (<div>objectName[key]</div>)) */}
      {Object.entries(products).map(([productId, productData]) => {
        //Add some logic to check if the user's subscription is active
        const isCurrentPackage = productData.name
          .includes(subscription?.role);

        return (
          <div 
          key={productId}

          //if isCurrentPackage then i want to add on the "planScreen_plan--disabled" className 
          className={`${
            isCurrentPackage && "planScreen__plan--disabled"
            } planScreen__plan`}>
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            {/* Only trigger the loadCheckout if its not the current package cuz you dw to keep subscribing */}
            <button onClick={() => 
              !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
              {isCurrentPackage ? 'Current Package' : 'Subscribe'}
            </button>
          </div>
        )
      })}
      
    </div>
  )
}

export default PlanScreen
