import React from 'react'
import { StyledMainLayout } from './MainLayout.styled'

export const MainLayout = ({children}) => {
    return (
        <StyledMainLayout>
            {children}
        </StyledMainLayout>
    )
}
