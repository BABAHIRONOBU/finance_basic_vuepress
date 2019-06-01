module.exports = {
    title: '비전공자를 위한 재무관리',
    description: '수업시간과 개인공부로 배운 내용을 정리합니다',
    themeConfig: {
      nav: [
        { text: '주식회사', link: '/corporation.html'},
        { text: '주식', link: '/stock.html'},
        { text: '재무제표', link: '/financial_statements.html'},
        { text: '채권', link: '/bond.html'},
        { text: 'PEF & Hedge Fund', link: '/pef&hedge_fund.html'},
      ],
      sidebar: 'auto',
      sidebarDepth: 2
    },
    base: '/finance_basic/'
  }