import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MyClass from "./MyClass";
import Test from "./Test";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Test />
      <MyClass name="hasanur" roll="865139" />
      <Footer />
    </div>
  );
}
