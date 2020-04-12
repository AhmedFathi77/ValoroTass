import * as React from 'react';
import * as styles from './styles.module.sass';
import { statueType } from '../singleItem';

interface IProps{
    status: statueType;
}
const ItemsHeader: React.FC<IProps> = (props) =>{
    const {status} = props;
    return(
        <div className={styles.default.wrapper}>
            <span>Company name</span>
            <span>Certificate name</span>
            <span>Certificate status</span>
            {status === statueType.requested? <span className={styles.default.action}>Action</span>: ''}
            
        </div>
    )
}

export default ItemsHeader;