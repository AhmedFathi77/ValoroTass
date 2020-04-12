import * as React from 'react';
import * as styles from './styles.module.sass';
import RequestedItem, { statueType } from '../singleItem';
import ItemsHeader from '../header';
import { useDispatch } from 'react-redux';
import { getRequestedSchools } from '../../../React-Redux/Actions/get-requested-schools-action';



const Requested: React.FC = () =>{
    const dispatch = useDispatch();
    React.useEffect( ()=> {dispatch(getRequestedSchools())})
    return(
        <div className={styles.default.wrapper}>
            <ItemsHeader status={statueType.requested} />
            <RequestedItem id={1} name={"IbnKhaldon school"} certificate_name={"Prep"}
                            status={statueType.requested} documents= {{
                                name: "License",
                                url: "//any Googledrive document link"
                            }}
            />
        </div>
    )
}

export default Requested;