import React from "react";
import { FishProvider } from "./fish/FishProvider";
import { UserProvider } from "./users/UserProvider";
import { UserList } from "./users/UserList";


export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
                <FishProvider>

                    <Route exact path="/">
                        <UserList />
                    </Route>

                </FishProvider>
            </UserProvider>

        </>
    )
}