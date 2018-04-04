import React from 'react'
import {shallow, render, mount} from 'enzyme'
import DecoratedCommentList, {CommentList} from './index'
import articles from '../../fixtures'


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

    // it('should open first comment', () => {
    //     const wrapper = mount(<DecoratedCommentList comments={comments} />)
    //     wrapper.find('.test--comment__btn').simulate('click')
    //     expect(wrapper.find('.test--comment__body').length).toEqual(1)
    // });
});