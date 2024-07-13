import React from 'react'
import "./Women.css"
import img1 from "../../assets/img1.jpeg"
import img2 from "../../assets/img2.jpeg"
import img3 from "../../assets/img3.jpeg"
import img4 from "../../assets/img4.jpeg"
import img5 from "../../assets/img5.jpeg"
import img6 from "../../assets/img6.jpeg"
import { Link } from 'react-router-dom'

const Women = () => {
  return (
    <main>
      <section className="breadcrumb">
        <span>Home</span> / <span>Clothing</span> / <span>Tops Online</span>
      </section>
      <section className="content">
        <aside className="filter">
          <h2>Filters</h2>
          <div className="categories">
            <h3>Categories</h3>
            <ul style={{ listStyleType: "circle" }}>
              <li>Tops</li>
              <li>Thermal Tops</li>
              <li>Swim Tops</li>
            </ul>
          </div>
          <div className="brands">
            <h3>Brand</h3>
            <ul style={{ listStyleType: "circle" }}>
              <li>LULU &amp; SKY</li>
              <li>BAESD</li>
              <li>StyleCast</li>
              <li>Trendyol</li>
              <li>DressBerry</li>
              <li>Poshyaa</li>
              <li>Tokyo Talkies</li>
            </ul>
          </div>
        </aside>
        <section className="products">
          <a
            href="outfits/outfit-1.html"
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className="product-card">
              <img src={img1} alt="HULI Mustard Bow Top" />
              <div className="product-info">
                <h3>HULI</h3>
                <p>Mustard Bow Top</p>
                <p className="price">
                  Rs. 506 <span className="original-price">Rs. 1299</span>{" "}
                  <span className="discount">61% OFF</span>
                </p>
              </div>
            </div>
          </a>
          <a
            href="outfits/outfit-2.html"
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className="product-card">
              <img src={img2} alt="Athena Bell Sleeve Top" />
              <div className="product-info">
                <h3>Athena</h3>
                <p>Bell Sleeve Top</p>
                <p className="price">
                  Rs. 600 <span className="original-price">Rs. 1200</span>{" "}
                  <span className="discount">50% OFF</span>
                </p>
              </div>
            </div>
          </a>
          <a
            href="outfits/outfit-3.html"
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className="product-card">
              <img src={img3} alt="HULI Basic Crew Neck" />
              <div className="product-info">
                <h3>HULI</h3>
                <p>Basic Crew Neck</p>
                <p className="price">
                  Rs. 406 <span className="original-price">Rs. 1199</span>{" "}
                  <span className="discount">61% OFF</span>
                </p>
              </div>
            </div>
          </a>
          <a
            href="outfits/outfit-4.html"
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className="product-card">
              <img src={img4} alt="BAESD Cute Pink Flowy Top" />
              <div className="product-info">
                <h3>BAESD</h3>
                <p>Cute Pink Flowy Top</p>
                <p className="price">
                  Rs. 600 <span className="original-price">Rs. 1200</span>{" "}
                  <span className="discount">50% OFF</span>
                </p>
              </div>
            </div>
          </a>
          <Link to="/productinfo">
            <div className="product-card">
              <img src={img5} alt="HULI Tube Top" />
              <div className="product-info">
                <h3>HULI</h3>
                <p>Tube Top</p>
                <p className="price">
                  Rs. 406 <span className="original-price">Rs. 1199</span>{" "}
                  <span className="discount">61% OFF</span>
                </p>
              </div>
            </div>
          </Link>
          <a
            href="outfits/outfit-6.html"
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className="product-card">
              <img src={img6} alt="BAESD Pink Boxy Crop Top" />
              <div className="product-info">
                <h3>BAESD</h3>
                <p>Pink Boxy Crop Top</p>
                <p className="price">
                  Rs. 506 <span className="original-price">Rs. 1299</span>{" "}
                  <span className="discount">61% OFF</span>
                </p>
              </div>
            </div>
          </a>
        </section>
      </section>
    </main>
  );
}

export default Women