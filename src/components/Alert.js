import React from 'react'

export default function Alert(props) {
    //making a capitilized function 
    const capitilized = (word)=>{
        let low = word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }
        //pehla word ka capital do baaki usi lowWord k pehla char ko 'slice' kr
    return (
        <div className='container' style={{height:"50px"}}>
            {/* props.alert && ham na ya is lye use kya ha k hamara pass error aa rha tha kyu k initially hamari alert ki value 'null' ha  */}
            {/* is cheec la matlab y aha k  pehla 'props.alert' return kro baad mn next part */}
            {/* ab initially jab alert null ha to null pass ho ga to kuch nhi ho ga  Or then next wala part return ho jay ga  */}

            {/* Agr first null ha to 2nd return kr do */}
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {capitilized(props.alert.type)} :{props.alert.msg}
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
            }
        </div>
    )
}


//ham na " {props.alert && <div className" is wali line ko curly brackets mn use kya us ki wajh ya thi ki ham na use aik div k ander use kya tha    div mn html hoti ha to us se alag krny k lye   {} use ki 
// HAm CLS commulativr layout shift ko kam se kam rakhnachahty hain is lye ham  alert wala part ko aik height de de ga ta k vo baaki layout ko shift na kry 