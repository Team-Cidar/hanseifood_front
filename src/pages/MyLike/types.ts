import { Lang, MenuSpecific } from "@type/index";
import { Ref, RefObject } from "react";

export type MyLikeViewProps = {
    datas: Datas,
    refs: Refs,
    callbacks: Callbacks
};

export type Datas = {
    lang: Lang,
    menus: MenuSpecific[]
}

export type Refs = {
    scrollRef: RefObject<HTMLDivElement>
}

export type Callbacks = {
    onCancelLike: (menuId: string) => void,
    onScroll: () => void,
}