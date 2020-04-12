import React from 'react';
import * as styles from "./styles.module.sass";
import ItemsHeader from '../header';
import RequestedItem, { statueType } from '../singleItem';
const Accepted: React.FC = () =>{
    return(
        <div className={styles.default.wrapper}>
            <ItemsHeader status={statueType.accepted} />
            <RequestedItem id={1} name={"IbnKhaldon school"} certificate_name={"Prep"}
                    status={statueType.accepted} documents= {{
                        name: "License",
                        url: "//any Googledrive document link"
                    }}
            />
        </div>
    )
}

export default Accepted;