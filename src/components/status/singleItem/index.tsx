import * as React from 'react';
import * as styles from './styles.module.sass';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GetAppIcon from '@material-ui/icons/GetApp';
export enum statueType{
    requested= "Requested",
    accepted= "Accepted",
    rejected = "Rejected"
}

export interface IDocument{
    name: string;
    url: string;
}

export interface ISchoolRequest{
    id:number;
    name:string;
    status: statueType;
    documents: IDocument;
    certificate_name : string;
}
const RequestedItem: React.FC<ISchoolRequest> = (props) =>{
    const {certificate_name,name,status} = props;
    return(
        <div className={styles.default.wrapper}>
            <span>{name}</span>
            <span>{certificate_name}</span>
            {
                status === statueType.requested?<span>{status}</span>:''
            }
                <ul className={styles.default.actionList}>
                    {
                        status === statueType.requested?(
                            <>
                                <li className={styles.default.accept}><CheckIcon style={{color: 'green'}} /></li>
                                <li className={styles.default.reject}><ClearIcon style={{color: 'red'}}/></li>
                            </>
                        )
                            :
                            ''
                    }
                        <li className={styles.default.document}><InsertDriveFileIcon /></li>,
                        <li className={styles.default.download}><GetAppIcon style={{color: 'blue'}} /></li>
                    
                    
                </ul>
            
        </div>
    )
}

export default RequestedItem;