import React from 'react'
// import { render } from 'react-dom'
// import { render } from 'react-dom'
// import { Component } from 'react'
import { Redirect,Route } from 'react-router'
import { gettoken } from './redux/utils/common'
const Private = ({component:Component, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>{
            gettoken()? <Component {...props}/>: <Redirect to={{path:"/login", state:{from:props.location}}}/>
        }}/>
        
    )
}
export default Private