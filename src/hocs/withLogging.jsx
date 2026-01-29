import { useEffect } from "react"

export const withLogging = (WrappedComponent) => {

    const ComponentWithLogging = (props)=> {
        useEffect(() => {
            console.log(`${WrappedComponent.name} se monto!`)
        }, [])
        return <WrappedComponent {...props}/>
    }

    return ComponentWithLogging
};