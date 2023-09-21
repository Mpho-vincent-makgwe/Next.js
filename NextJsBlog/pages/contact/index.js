import ContactForm from "@/componets/contact/contact-form"
import Head from "next/head"
import { Fragment } from "react"

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact ME</title>
                <meta  name="FeedBack" content="Contact ME For FeedBack"/>
            </Head>
            <Fragment>
                <ContactForm/>
            </Fragment>
            
        </div>
    )
}

export default Contact
