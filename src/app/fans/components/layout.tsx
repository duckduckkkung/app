"use client";

import { Overlay } from "@/shared/components/overlay";

import { CommunityComponent } from "./community";
import { SubComponent } from "./sub/sub";
import { FanComponent } from "./fan";

import { useSettingsProps } from "../stores/props.zustand";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const {
        isOpen,
        setIsOpen,
        isCommunityOpen,
        setIsCommunityOpen,
        isSubOpen,
        setIsSubOpen,
    } = useSettingsProps();

    return (
        <Overlay
            id="sub"
            isOpen={isSubOpen}
            onClose={() => setIsSubOpen(false)}
        >
            <Overlay.Parent targetId="sub">
                <Overlay
                    id="community"
                    isOpen={isCommunityOpen}
                    onClose={() => setIsCommunityOpen(false)}
                >
                    <Overlay.Parent targetId="community">
                        <Overlay
                            id="fan"
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                        >
                            <Overlay.Parent targetId="fan">
                                {children}
                            </Overlay.Parent>

                            <Overlay.Children>
                                <FanComponent />
                            </Overlay.Children>
                        </Overlay>
                    </Overlay.Parent>

                    <Overlay.Children>
                        <CommunityComponent />
                    </Overlay.Children>
                </Overlay>
            </Overlay.Parent>

            <Overlay.Children>
                <SubComponent />
            </Overlay.Children>
        </Overlay>
    );
};

export default Layout;
