import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}:any) {
    let stripepromise:any = null;
    const getstripe = () => {
        if (!stripepromise) {
            stripepromise = loadStripe("pk_test_51OKnQESBsdzm3xFeS8uzXNLnsiwa1zskzfN7lb9bLaoq9hlhUzMaLGdSheBLGp9tsKgsUbSrX1B88jgxO6m9FSCS009k2XBA9L");
            return stripepromise;
        }
    }
    const stripe = await getstripe();
    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        successUrl: `http://localhost:300/browse`,
        cancelUrl: window.location.origin
    })
}