import React from 'react'
import {shallow, render, mount} from 'enzyme'
import DecoratedCommentList, {CommentList} from './index'
import articles from '../../fixtures'

jest.mock('react-addons-css-transition-group', () => ({children}) => {
    return <span>{children}</span>
})

describe('CommentList', () => {
    const comments = articles[0].comments

    it('should render a list', () => {
        const wrapper = shallow(<CommentList comments={comments} isOpen = {true} />)
        expect(wrapper.find('.test--comment-list__item').length).toEqual(comments.length)
    });

    it('should have all comments closed by default', () => {
        const wrapper = render(<DecoratedCommentList comments={comments} />)
        expect(wrapper.find('.test--comment__body').length).toEqual(0)
    });

    it('should open comment list', () => {
        const wrapper = mount(<DecoratedCommentList comments={comments} />)
        expect(wrapper.find('.test--comment-list__item').length).toEqual(0)

        wrapper.find('.test--comment__btn').at(0).simulate('click')
        expect(wrapper.find('.test--comment-list__item').length).toEqual(comments.length)
    });

    it('should close comment list', () => {
        const wrapper = mount(<DecoratedCommentList comments={comments} />)
        expect(wrapper.find('.test--comment-list__item').length).toEqual(0)

        wrapper.find('.test--comment__btn').at(0).simulate('click')
        wrapper.find('.test--comment__btn').at(0).simulate('click')
        expect(wrapper.find('.test--comment-list__item').length).toEqual(0)
    });
});