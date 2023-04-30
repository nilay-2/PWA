import React from "react";
import "./fonts/icomoon/style.css";
import "./css/bootstrap.min.css";
import "./css/magnific-popup.css";
import "./css/owl.theme.default.min.css";
import "./css/aos.css";
import "./css/style.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  // function togglesearch() {
  //   console.log("toggle  called");
  //   document.getElementById("searchToggle").classList.toggle("active");
  //   console.log(document.getElementById("searchToggle").classList);
  // }
  // function search(e) {
  //   e.preventDefault();
  //   const key = document.getElementById("searchinp").value;
  //   window.location.href = `/search/${key}`;
  // }

  const Notify = async () => {
    const swRegistration = await navigator.serviceWorker.register(
      "serviceWorker.js"
    );
    console.log(swRegistration);
    swRegistration.sync.register("helloSync").then(function () {
      console.log("hello sync success [main.js]");
    });
  };

  return (
    <div className="site-wrap">
      <div className="site-navbar py-2">
        <div className="search-wrap" id="searchToggle">
          <div className="container">
            <a className="search-close js-search-close">
              <span className="icon-close2"></span>
            </a>
            <form>
              <input
                type="text"
                id="searchinp"
                className="form-control"
                placeholder="Search keyword and hit enter..."
              />
            </form>
          </div>
        </div>

        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <div className="site-logo">
                <a href="/home" className="js-logo-clone">
                  BookWorm
                </a>
              </div>
            </div>
            <div className="main-nav d-none d-lg-block">
              <nav
                className="site-navigation text-right text-md-center"
                role="navigation"
              >
                <ul className="site-menu  d-none d-lg-block">
                  <li className="active">
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/shop">Store</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/productform">Sell</a>
                  </li>
                  <li>
                    <a href="/myproducts">My Products</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="icons">
              <a href="#" className="icons-btn d-inline-block js-search-open">
                <span className="icon-search"></span>
              </a>
              <a href="/cart" className="icons-btn d-inline-block bag">
                <span className="icon-shopping-bag"></span>
                {/* <span className="number">2</span>  */}
              </a>
              <a
                href="#"
                className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
              >
                <span className="icon-menu"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-blocks-cover"
        style={{
          backgroundImage:
            "url('https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
              <div className="site-block-cover-content text-center">
                <h2 className="sub-title" style={{ color: "black" }}>
                  Effective Book, New Books Everyday
                </h2>
                <h1>Welcome To BookWorm</h1>
                <p>
                  {/*<a href="/shop" className="btn btn-primary px-5 py-3">*/}
                  <button
                    className="btn btn-primary px-5 py-3"
                    onClick={Notify}
                  >
                    Shop Now
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div
            className="row align-items-stretch section-overlap"
            style={{ justifyContent: "space-evenly" }}
          >
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap bg-primary h-100">
                <a href="/shop" className="h-100">
                  <h5>
                    Daily new
                    <br />
                    Books
                  </h5>
                  <p style={{ fontSize: "15px" }}>
                    New books are added everyday, so keep looking till you find
                    it.
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap h-100">
                <a href="/shop" className="h-100">
                  <h5>
                    Festive Sale <br /> Get upto 50% Off
                  </h5>
                  <p style={{ fontSize: "15px" }}>
                    Coming soon to your nearest devices.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="title-section text-center col-12">
              <h2 className="text-uppercase">Newly Added</h2>
            </div>
          </div>

          <div className="row" style={{ justifyContent: "space-evenly" }}></div>
        </div>
      </div>

      <hr style={{ border: "2px solid black" }} />
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="block-7">
                <h3 className="footer-heading mb-4">About Us</h3>
                <p>
                  Made by students. For students. We are students just like you
                  who have faced the same problem of buying books every
                  semester. Rather than buying new books we found a better
                  solution and are sharing it with you.
                </p>
              </div>
            </div>
            <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
              <h3 className="footer-heading mb-4">Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/shop">Store</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/productform">Sell</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                  <li className="address">
                    VESIT, Hashu Adwani Memorial Complex, Collector's Colony,
                    Chembur, Mumbai, Maharashtra 400074
                  </li>
                  <li className="phone">
                    <a href="tel://999999999">9999999999</a>
                  </li>
                  <li className="email">
                    <a href="mailto://bookworm@gmail.com">bookworm@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
