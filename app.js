import React from "react";
import  ReactDOM  from "react-dom/client";


const Header = () => {
    return (<div className="header">
        <div className="logo-container">
            <img src="https://images.yourstory.com/cs/images/companies/logosC141575978425306png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" />

        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}


const RestrauntCard = () => {
  return (
    <div className="Restraunt-Card" style={{backgroundColor: "#0000000D"}}>
        <img className="res-img" src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" />
      <h1>Meghna Foods</h1>
      <h4>Veg and Non-Veg</h4>
      <h4>North Indian</h4>
      <h4>3.4*</h4>
      <h4>38 min</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="">search</div>
      <div className="rest-container">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
      </div>
    </div>
  );
};
const Applayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
