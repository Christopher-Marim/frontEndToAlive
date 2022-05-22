import { useContext } from 'react';
import { StrockContext } from '../contexts/state';
export function useStrock() {
    const context = useContext(StrockContext)
    
    return context
}