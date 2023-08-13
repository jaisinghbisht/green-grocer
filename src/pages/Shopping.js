import CitySearch from "./CitySearch";

const Shopping = () => {
  return (
    <>
      <CitySearch />
      <div>
            {/* HEAD SECTION */}
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="shopping.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet" />
                <title>Green Grocery | Shopping</title>
            </head>

            {/* BODY SECTION */}
            <body>
                {/* HEADER */}
                <div id="1"></div>
                <script>
                    {`
                    function load(url) {
                        const req = new XMLHttpRequest();
                        req.open("GET", url, false);
                        req.send(null);
                        document.getElementById(1).innerHTML = req.responseText;
                    }
                    load("header.html");
                    `}
                </script>
                <script src="script.js"></script>
                <script>
                    {`
                    function toggleFilter() {
                        const filterSection = document.querySelector('.filter-section');
                        if (filterSection.style.display === 'none' || filterSection.style.display === '') {
                            filterSection.style.display = 'block';
                        } else {
                            filterSection.style.display = 'none';
                        }
                    }
                    `}
                </script>

                {/* MAIN SECTION */}
                    <section class="items">
        <div class="item">
            <img src="images/vegetables/apple.jpeg" alt="Vegetable 1"/>
            <div class="item-details">
                <h3>Apple</h3>
                <p class="price">Rs 170</p>
                <label for="quantity1">Quantity:</label>
                <select id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

        <div class="item">
            <img src="images/vegetables/celery.jpeg" alt="Vegetable 1"></img>
            <div class="item-details">
                <h3>Celery</h3>
                <p class="price">Rs 60</p>
                <label for="quantity1">Quantity:</label>
                <select id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

        <div class="item">
            <img src="images/vegetables/brinjal.jpeg" alt="Vegetable 1"></img>
            <div class="item-details">
                <h3>Brinjal</h3>
                <p class="price">Rs 40</p>
                <label for="quantity1">Quantity:</label>
                <select id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

        <div class="item">
            <img src="images/vegetables/broccli.jpeg" alt="Vegetable 1"></img>
            <div class="item-details">
                <h3>Broccli</h3>
                <p class="price">Rs 50</p>
                <label for="quantity1">Quantity:</label>
                <select id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

        <div class="item">
            <img src="images/vegetables/carrot.jpeg" alt="Vegetable 1"></img>
            <div class="item-details">
                <h3>Carrot</h3>
                <p class="price">Rs 40</p>
                <label for="quantity1">Quantity:</label>
                <select id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

        <div class="item">
            <img src="images/vegetables/cucumber.jpeg" alt="Vegetable 1"></img>
            <div class="item-details">
                <h3>Cucumber</h3>
                <p class="price">Rs 25</p>
                <label for="quantity1">Quantity:</label>
                <select id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

        <div class="item">
            <img src="images/vegetables/blueberry.jpeg" alt="Vegetable 1"></img>
            <div class="item-details">
                <h3>Blueberry</h3>
                <p class="price">Rs 40</p>
                <label for="quantity1">Quantity:</label>
                <select id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

        <div class="item">
            <img src="images/vegetables/orange.jpeg" alt="Vegetable 1"></img>
            <div class="item-details">
                <h3>Orange</h3>
                <p class="price">Rs 120</p>
                <label for="quantity1">Quantity:</label>
                <select id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

        <div class="item">
            <img src="images/vegetables/potato.jpeg" alt="Vegetable 1"></img>
            <div class="item-details">
                <h3>Potato</h3>
                <p class="price">Rs 20</p>
                <label for="quantity1">Quantity:</label>
                <select id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

        <div class="item">
            <img src="images/vegetables/tomato.jpeg" alt="Vegetable 1"></img>
            <div class="item-details">
                <h3>Tomato</h3>
                <p class="price">Rs 140</p>
                <label for="quantity1">Quantity:</label>
                <select id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    </section>

                {/* FOOTER */}
                <div id="4"></div>
                <script>
                    {`
                    load("footer.html");

                    function load(url) {
                        const req = new XMLHttpRequest();
                        req.open("GET", url, false);
                        req.send(null);
                        document.getElementById(4).innerHTML = req.responseText;
                    }
                    `}
                </script>
            </body>
        </div>
    </>
    
  );
};

export default Shopping;
