import { children } from "react";

export default function TabButton({ children, onSelect }) {


    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}