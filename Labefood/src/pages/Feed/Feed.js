import React, { useState, useEffect, useContext } from "react";
import MediaCardFeed from "../../components/Feed/MediaCardFeed";
import axios from "axios";
import { BASE_URL, appName } from "../../constants/baseUrl";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { AppBar, Box, Tab, Tabs, TextField } from "@material-ui/core";
import Loading from "../../assets/loading.gif";
import GlobalStateContext from "../../context/GlobalStateContext";

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && <Box>{children}</Box>}</div>;
}

export default function Feed() {
  const [restaurants, setRestaurants] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [category, setCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { requests, setters } = useContext(GlobalStateContext);
  const history = useHistory();
  useProtectedPage();

  useEffect(() => {
    getRestaurants();
    requests.getProfileAdress();
  }, []);

  const getRestaurants = () => {
    const token = localStorage.getItem("token");

    setIsLoading(true);
    axios
      .get(`${BASE_URL}/${appName}/restaurants`, { headers: { auth: token } })
      .then((res) => {
        setRestaurants(res.data.restaurants);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  const onChangeInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleCategoryChange = (e, value) => {
    setCategory(value);
  };

  const filterFeed = () => {
    return restaurants.filter((restaurant) => {
      const title = restaurant.name.toLowerCase();
      return title.indexOf(inputTitle.toLowerCase()) > -1;
    });
  };

  const showPage = () => {
    if (category > 0) {
      return (
        <div>
          <TabPanel value={category} index={0}>
            <div>
              {restaurants &&
                restaurants.map((restaurant) => {
                  return (
                    <MediaCardFeed
                      key={restaurant.id}
                      id={restaurant.id}
                      name={restaurant.name}
                      description={restaurant.description}
                      address={restaurant.address}
                      shipping={restaurant.shipping}
                      deliveryTime={restaurant.deliveryTime}
                      logoUrl={restaurant.logoUrl}
                      category={restaurant.category}
                    />
                  );
                })}
            </div>
          </TabPanel>

          <TabPanel value={category} index={1}>
            <div>
              {restaurants &&
                restaurants
                  .filter((restaurant) => {
                    return restaurant.category === "Árabe";
                  })
                  .map((restaurant) => {
                    return (
                      <MediaCardFeed
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        address={restaurant.address}
                        shipping={restaurant.shipping}
                        deliveryTime={restaurant.deliveryTime}
                        logoUrl={restaurant.logoUrl}
                        category={restaurant.category}
                      />
                    );
                  })}
            </div>
          </TabPanel>

          <TabPanel value={category} index={2}>
            <div>
              {restaurants &&
                restaurants
                  .filter((restaurant) => {
                    return restaurant.category === "Asiática";
                  })
                  .map((restaurant) => {
                    return (
                      <MediaCardFeed
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        address={restaurant.address}
                        shipping={restaurant.shipping}
                        deliveryTime={restaurant.deliveryTime}
                        logoUrl={restaurant.logoUrl}
                        category={restaurant.category}
                      />
                    );
                  })}
            </div>
          </TabPanel>

          <TabPanel value={category} index={3}>
            <div>
              {restaurants &&
                restaurants
                  .filter((restaurant) => {
                    return restaurant.category === "Baiana";
                  })
                  .map((restaurant) => {
                    return (
                      <MediaCardFeed
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        address={restaurant.address}
                        shipping={restaurant.shipping}
                        deliveryTime={restaurant.deliveryTime}
                        logoUrl={restaurant.logoUrl}
                        category={restaurant.category}
                      />
                    );
                  })}
            </div>
          </TabPanel>

          <TabPanel value={category} index={4}>
            <div>
              {restaurants &&
                restaurants
                  .filter((restaurant) => {
                    return restaurant.category === "Carnes";
                  })
                  .map((restaurant) => {
                    return (
                      <MediaCardFeed
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        address={restaurant.address}
                        shipping={restaurant.shipping}
                        deliveryTime={restaurant.deliveryTime}
                        logoUrl={restaurant.logoUrl}
                        category={restaurant.category}
                      />
                    );
                  })}
            </div>
          </TabPanel>

          <TabPanel value={category} index={5}>
            <div>
              {restaurants &&
                restaurants
                  .filter((restaurant) => {
                    return restaurant.category === "Hamburguer";
                  })
                  .map((restaurant) => {
                    return (
                      <MediaCardFeed
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        address={restaurant.address}
                        shipping={restaurant.shipping}
                        deliveryTime={restaurant.deliveryTime}
                        logoUrl={restaurant.logoUrl}
                        category={restaurant.category}
                      />
                    );
                  })}
            </div>
          </TabPanel>

          <TabPanel value={category} index={6}>
            <div>
              {restaurants &&
                restaurants
                  .filter((restaurant) => {
                    return restaurant.category === "Italiana";
                  })
                  .map((restaurant) => {
                    return (
                      <MediaCardFeed
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        address={restaurant.address}
                        shipping={restaurant.shipping}
                        deliveryTime={restaurant.deliveryTime}
                        logoUrl={restaurant.logoUrl}
                        category={restaurant.category}
                      />
                    );
                  })}
            </div>
          </TabPanel>

          <TabPanel value={category} index={7}>
            <div>
              {restaurants &&
                restaurants
                  .filter((restaurant) => {
                    return restaurant.category === "Mexicana";
                  })
                  .map((restaurant) => {
                    return (
                      <MediaCardFeed
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        address={restaurant.address}
                        shipping={restaurant.shipping}
                        deliveryTime={restaurant.deliveryTime}
                        logoUrl={restaurant.logoUrl}
                        category={restaurant.category}
                      />
                    );
                  })}
            </div>
          </TabPanel>

          <TabPanel value={category} index={8}>
            <div>
              {restaurants &&
                restaurants
                  .filter((restaurant) => {
                    return restaurant.category === "Petiscos";
                  })
                  .map((restaurant) => {
                    return (
                      <MediaCardFeed
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        address={restaurant.address}
                        shipping={restaurant.shipping}
                        deliveryTime={restaurant.deliveryTime}
                        logoUrl={restaurant.logoUrl}
                        category={restaurant.category}
                      />
                    );
                  })}
            </div>
          </TabPanel>

          <TabPanel value={category} index={9}>
            <div>
              {restaurants &&
                restaurants
                  .filter((restaurant) => {
                    return restaurant.category === "Sorvetes";
                  })
                  .map((restaurant) => {
                    return (
                      <MediaCardFeed
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        address={restaurant.address}
                        shipping={restaurant.shipping}
                        deliveryTime={restaurant.deliveryTime}
                        logoUrl={restaurant.logoUrl}
                        category={restaurant.category}
                      />
                    );
                  })}
            </div>
          </TabPanel>
        </div>
      );
    } else {
      return filterFeed().length > 0 ? (
        filterFeed().map((restaurant) => {
          return (
            <div
              onClick={() => {
                requests.getRestaurantesDetails(restaurant.id) ||
                  history.push(`/restaurants/${restaurant.id}`) ||
                  setters.setdeliveryTime(restaurant.deliveryTime) ||
                  setters.setShipping(restaurant.shipping);
              }}
            >
              <MediaCardFeed
                key={restaurant.id}
                category={restaurant.category}
                logoUrl={restaurant.logoUrl}
                name={restaurant.name}
                deliveryTime={restaurant.deliveryTime}
                shipping={restaurant.shipping}
              ></MediaCardFeed>
              <br />
            </div>
          );
        })
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          Nenhum resultado encontrado.
        </div>
      );
    }
  };

  return (
    <div style={{ paddingBottom: "15%" }}>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <TextField
          variant="outlined"
          onChange={onChangeInputTitle}
          value={inputTitle}
          placeholder="Restaurante"
          style={{ minWidth: "350px" }}
        />
      </div>
      <h1 align="center" style={{ fontSize: "1.17rem" }}>
        Restaurantes
      </h1>
      <AppBar
        position="static"
        color="white"
        elevation={0}
        style={{ marginBottom: "2rem" }}
      >
        <Tabs
          value={category}
          onChange={handleCategoryChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Todos" />
          <Tab label="Árabe" />
          <Tab label="Asiática" />
          <Tab label="Baiana" />
          <Tab label="Carnes" />
          <Tab label="Hamburguer" />
          <Tab label="Italiana" />
          <Tab label="Mexicana" />
          <Tab label="Petiscos" />
          <Tab label="Sorvetes" />
        </Tabs>
      </AppBar>
      {isLoading && <img style={{ margin: "0 47%" }} src={Loading} />}
      {showPage()}
      <Footer />
    </div>
  );
}
