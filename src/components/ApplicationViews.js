import React from "react";
import { FishProvider } from "./fish/FishProvider";
import { UserProvider } from "./users/UserProvider";
import { UserList } from "./users/UserList";
import { Route } from "react-router-dom";
import { Home } from "./users/UserList"
import { NavBar } from "./navigation/NavBar";


export const ApplicationViews = () => {
    return (
        <>
            {/* <UserProvider> */}
                {/* <FishProvider> */}

                    <Route exact path="/">
                        <NavBar />
                        <UserList />
                        <Home />
                    </Route>

                {/* </FishProvider> */}
            {/* </UserProvider> */}

        </>
    )
}