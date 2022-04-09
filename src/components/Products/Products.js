import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>knock knock ! who is there</h1>
            <h4>{user ? user.displayName : 'vooooooot'}</h4>
        </div>
    );
};

export default Products;