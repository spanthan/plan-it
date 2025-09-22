import { ID } from "appwrite";
import { Header } from "components"
import { useEffect } from "react";
import { Outlet, redirect } from "react-router";
import { storeUserData } from "~/appwrite/auth";
import { account, appwriteConfig, tables } from "~/appwrite/client";


// const handleTestWrite = async () => {
//     try {
//         const user = await account.get();

//         const doc = await tables.createRow({
//             databaseId: appwriteConfig.databaseId,
//             tableId: appwriteConfig.userCollectionId,
//             rowId: ID.unique(),
//             data: {
//                 accountId: user.$id,
//                 email: user.email,
//                 name: user.name,
//                 joinedAt: new Date().toISOString(),
//               },
//         });
//         console.log("Test write success:", doc);
//         alert("Test write success: " + doc.$id);
//     } catch (error) {
//         console.error("Test write failed:", error);
//         alert("Test write failed. See console for details.");
//     }
// };

const AllUsers = () => {
      
    return (
        <main className="dashboard wrapper"> 
            <Header 
                title= "Trips Page"
                description = "Check out our current users in real time"
            />

        {/* <aside className='children'>
            <div style={{ padding: 12 }}>
                <button onClick={handleTestWrite} style={{
                    padding: "8px 12px",
                    background: "#2563eb",
                    color: "white",
                    borderRadius: 6,
                    fontWeight: 600
                }}>Test DB Write</button>
            </div>
            <Outlet />
        </aside> */}
        </main>
    )
}

export default AllUsers