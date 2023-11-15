import { useEffect } from "react";

export const Privacy = () => {
    useEffect(() => {
        window.open('/terms_and_conditions.pdf')
        window.location.href = '/'
    }, [])
    return (
        <>
        </>
    )
};
