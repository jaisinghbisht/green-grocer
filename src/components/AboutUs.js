import React, { useEffect, useState } from "react";
import "../styles/about.css";
import Counter from "./Counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as regularStar,
  faStarHalfStroke,
} from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div>
        <div className="about-us">
          <div className="conatiner">
             <div className="row">
                 <div id="1">
                     <script>
                        load("header.html");

                        function load(url) 
                        {
                            req = new XMLHttpRequest()};
                            req.open("GET", url, false);
                            req.send(null);
                            document.getElementById(1).innerHTML = req.responseText;
                        
                     </script>
                 </div>
                 <div className="flex">
                <h2>About Us</h2>
                <h3>Discover our team story</h3>
                <p>Welcome to My Vegetable Shop, your one-stop destination for fresh and organic vegetables sourced directly from local farmers. We are passionate about providing you and your family with the best quality produce, all delivered right
                    to your doorstep</p>
                <p>At My Vegetable Shop, our mission is to promote healthy living and sustainable agriculture. We are committed to supporting local farmers and empowering them to grow and supply their produce while preserving the environment.</p>
                <section>
                    <h2>Why Choose Us</h2>
                    <ul>
                        <li>Freshness Guaranteed: We take pride in offering only the freshest vegetables. Our produce comes straight from the farm to your table, ensuring maximum nutrition and taste.
                        </li>
                        <li>Organic and Natural: Our commitment to organic farming practices means that you can trust the purity of our vegetables without any harmful chemicals.</li>
                        <li>Supporting Local Farmers: By choosing My Vegetable Shop, you contribute to the growth of local farming communities and their sustainable livelihood.</li>
                        <li>Wide Selection: From leafy greens to seasonal favorites, we have a wide variety of vegetables to meet your culinary needs.</li>
                        <li>Convenience: With our easy-to-navigate website, you can order your vegetables online and have them delivered to your home hassle-free.</li>
                    </ul>
                </section>
                <section>
                    <h2>Our Commitment</h2>
                    <p>At My Vegetable Shop, we are committed to your satisfaction. We value your feedback and continuously strive to improve our services. If you have any questions, suggestions, or concerns, please feel free to contact us at contact@myvegetableshop.com
                        or call us at (123) 456-7890.
                    </p>
                </section>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f fa-fade"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-fade"></i></a>
                    <a href="#"><i className="fab fa-instagram fa-fade"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in fa-fade"></i></a>
                </div>
                <a href="#" className="btn">Learn More</a>
            </div>
            <div className="flex">
                <img src="photo-1518843875459-f738682238a6.jfif" alt=""/>
            </div>
        </div>
    </div>
    <div id="4">
        <script>
            load("footer.html");

            function load(url) {
                req = new XMLHttpRequest()};
                req.open("GET", url, false);
                req.send(null);
                document.getElementById(4).innerHTML = req.responseText;
            
        </script>
    </div>
</div>
</div>
  );
}

export default App;
