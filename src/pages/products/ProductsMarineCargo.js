import React from 'react';
import { Button, Collapse } from 'antd';

import ContactForm from '../../components/ContactForm';

import '../../css/Products.css'
import { FormContact } from '../../components/Home/FormContact';

const ProductsMarineCargo = () => {
    const { Panel } = Collapse;

    const style = {
        background: "linear-gradient(135deg, hsla(196, 100%, 35%, 1) 0%, hsla(156, 100%, 37%, 1) 100%)",
        color: "#FFF",
        position: "relative",
        height: "341px",
    }

    const styleSP = {
        padding: "128px 24px",
        maxWidth: "1200px",
        margin: "auto",
    }

    return (
        <>
            <div className="products-banner" style={style}>
                <div className="banner-elem">
                    <div className="text-wrapper text-left">
                        <div className="introduction">
                            <h1>Marine Cargo</h1>
                            <h3>
                                Lorem Ipsum si Amet
                            </h3>
                        </div>
                        <Button type="primary" style={{ marginRight: "14px" }}>Buy Product</Button>
                        <Button type="primary" href="#contactForm">Send Enquiry</Button>
                    </div>
                </div>
            </div>
            <div className="page-wrapper section-product" style={styleSP}>
                <div className="product-benefits">
                    <h2>Key Benefits</h2>
                    <ul class="product-benefits-list">
                        <li>Lorem Ipsum si Amet</li>
                        <li>Lorem Ipsum si Amet</li>
                        <li>Lorem Ipsum si Amet</li>
                        <li>Lorem Ipsum si Amet</li>
                        <li>Lorem Ipsum si Amet</li>
                    </ul>
                </div>
                <div className="product-details">
                    <h2>Product Details</h2>
                    <Collapse className="product-details-accordion" accordion>
                        <Panel header="Coverages" key="coverages">
                            <ul>
                                <li>Lorem Ipsum si Amet</li>
                                <li>Lorem Ipsum si Amet</li>
                                <li>Lorem Ipsum si Amet</li>
                                <li>Lorem Ipsum si Amet</li>
                                <li>Lorem Ipsum si Amet</li>
                            </ul>
                        </Panel>
                        <Panel header="Exclusions" key="exclusions">
                            <ul>
                                <li>Lorem Ipsum si Amet</li>
                                <li>Lorem Ipsum si Amet</li>
                                <li>Lorem Ipsum si Amet</li>
                                <li>Lorem Ipsum si Amet</li>
                                <li>Lorem Ipsum si Amet</li>
                            </ul>
                        </Panel>
                        <Panel header="Download Brochure" key="download">
                            <a href="#" download> Download Brochure</a>
                        </Panel>
                    </Collapse>
                </div>
            </div>
            <FormContact />
        </>
    )
}

export default ProductsMarineCargo;