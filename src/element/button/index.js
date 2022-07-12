import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Button(props) {
    const className = [props.className]
    if(props.isPrimary) className.push("btn-primary")
    if(props.isLarge) className.push("btn-lg")
    if(props.isSmall) className.push("btn-sm")
    if(props.isBlock) className.push("btn-block")
    if(props.hasShadow) className.push("btn-shadow")

    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    if(props.isDisabled || props.isLoading){
    
        if(props.isDisabled) {
            className.push('disabled')
        }

        return (
            <span className={className.join(" ")} style={props.style}>
                {
                    props.isLoading ? 
                    <>
                    <span className="spinner-border spinnder-border-sm mx-5"></span>
                    <span className="sr-only">Loading ...</span>
                    </>
                    :
                    props.children
                }
            </span>
        )
    }

    if(props.type == "link"){
        if(props.isExternal){
            return (
                <a href={props.href} className={className.join(" ")} style={props.style} target={props.target == "_blank" ? '_blank' : (undefined)} rel={props.rel == "_blank" ? 'noopener' : 'noreferrer'}>{props.children}</a>
            )
        }else{
            return(
                <Link
                to={props.href} 
                className={className.join(" ")} 
                style={props.style} 
                target={props.target == "_blank" ? '_blank' : (undefined)} 
                rel={props.rel == "_blank" ? 'noopener' : 'noreferrer'}
                onCLick = {onClick}
                >
                </Link>
            )
        }
    }

  return (
    <Button
    className={className.join(" ")}
    style={props.style}
    onClick={onClick}>{props.children}      
    </Button>
  )
}

Button.propTypes = {
type: PropTypes.oneOf(["button", "link"]),
onClick : PropTypes.func,
target: PropTypes.string,
className: PropTypes.string,
isDisabled: PropTypes.bool,
isLoading:PropTypes.bool,
isSmall: PropTypes.bool,
isLarge: PropTypes.bool,
isBlock: PropTypes.bool,
hasShadow: PropTypes.bool
}

export default Button

