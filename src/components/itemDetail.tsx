import React from "react"
import images from "../constant/images"
import { INotificationItem } from "../provider/notification"
export type IItemDetail ={
    item:any
    category:ICategory

}
export  enum VISIBLE {
    VISIBLE=0,
    INVISUBLE=1
}
export enum ICategory{
    UPGRADE=0,
    SUPPORT=1,
    POWER=2,
    NOTIFICATION=3,
    CONNECTION =4,
    GROWMONTH = 5,
    GROWWEEK = 6,
    JOIN_NETWORK=7,
    UPGRADE_NOTE = 8,

}
const ItemDetail:React.FC<IItemDetail> = ({item,category})=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const ItemDetail = (_category:ICategory,_item:any)=>{
        if(!_item) return;
        switch(_category){
            case ICategory.UPGRADE:
                return <p>Your account was upgraded to { _item?_item: "Mecury"} ,sweet!</p>
            case ICategory.SUPPORT:
                return <p className="ml-3">A project your support  "{_item.title}" reached its funding goals</p>
            case ICategory.POWER:
                return;
            case ICategory.CONNECTION:
                return <p className="ml-3">Your new connection,{_item.first_name +_item.last_name } grew your network by {_item.total_member}</p>
            case ICategory.JOIN_NETWORK:
                return <p className="ml-3">{_item.username} joined your network</p>
            case ICategory.GROWMONTH:
                return <p className="ml-3">Your network grew by {_item} members in {monthNames[new Date().getMonth()]}</p>
            case ICategory.GROWWEEK:
                    return <p className="ml-3">Conguratulations! Your network grew by {_item} members this week</p>
                
            case ICategory.NOTIFICATION:
                    return(<div className="flex"><p className="ml-3">{_item.text}</p><a className="text-blue-300" href={_item.link}>{_item.link}</a></div>)
               
            default:
                return;
            break;
        }
    }
    return(
        <div className="flex my-2 items-center">
            <img src={images.Dot} alt="" className="w-6 h-6" />
            {ItemDetail(category,item)}
        </div>
    )
}
export default ItemDetail