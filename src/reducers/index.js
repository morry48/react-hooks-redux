// action = {
// type: 'CREATE_EVENT',
// title: '2020年東京オリンピックのおしらせ'
// body: '2020年にオリンピックを開催しますつきましては'
//} 
// state = []
// state = [
//   {id: 1, title: 'タイトル1', }
//]



const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body }
            const length = state.length
            let id = length === 0 ? id = 1 : id = state[length -1 ].id + 1
            return [...stable, {id, ...event}]
        case 'DELETE_EVENT':
            return state
        case 'DELETE_ALL_EVENTS':
            return []
        default:
          return state
    }
}

export default event