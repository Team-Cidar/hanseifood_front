import { Comment, Commenter, MenuSpecific, Paging } from ".";

export const DefaultPaging = <Paging>{
    currentPage: 0,
    pageSize: 5,
    hasNext: true
}

export const DefaultMenuSpecific = <MenuSpecific>{
    date: '2023-01-31',
    menus: ['스타벅스', '이디야', '투썸'],
    menuId: 'default-menu',
    menuType: 'S',
    likeCount: 0,
    commentCount: 0,
    deleted: true,
    deletedAt: '2024-01-29 01:23:45'
}

export const DefaultCommenter = <Commenter>{
    kakaoId: '12345678',
    nickname: 'Jeremy'
}

export const DefaultComment = <Comment>{
    commentId: 'comment-id',
    menu: DefaultMenuSpecific,
    commenter: DefaultCommenter,
    comment: 'Goooooooooood',
    commentedAt: '2024-01-31 01:23:45',
    deleted: true,
    deletedAt: '2024-01-30 01:23:45'
}