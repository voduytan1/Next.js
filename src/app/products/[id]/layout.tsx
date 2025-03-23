import { ReactNode } from "react";

export default function LayoutProduct({ children}: { children: ReactNode }) {
    return (<div>
            {children}
                <div>
                    Product section
                </div>
            </div>);
}