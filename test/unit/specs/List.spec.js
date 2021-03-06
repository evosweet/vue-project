import List from '@/components/List'
import Vue from 'vue'

describe('List.vue', () => {
  it('displays items from the list', () => {
    // our test goes here
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    expect(ListComponent.$el.textContent).to.contain('play games')
  })
})
