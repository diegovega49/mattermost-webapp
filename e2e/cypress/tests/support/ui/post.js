// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

Cypress.Commands.add('uiGetPostTextBox', (option = {exist: true}) => {
    if (option.exist) {
        return cy.get('#post_textbox').should('be.visible');
    }

    return cy.get('#post_textbox').should('not.exist');
});

Cypress.Commands.add('uiGetReplyTextBox', (option = {exist: true}) => {
    if (option.exist) {
        return cy.get('#reply_textbox').should('be.visible');
    }

    return cy.get('#reply_textbox').should('not.exist');
});

Cypress.Commands.add('uiGetPostProfileImage', (postId) => {
    return getPost(postId).within(() => {
        return cy.get('.post__img').should('be.visible');
    });
});

Cypress.Commands.add('uiGetPostHeader', (postId) => {
    return getPost(postId).within(() => {
        return cy.get('.post__header').should('be.visible');
    });
});

Cypress.Commands.add('uiGetPostBody', (postId) => {
    return getPost(postId).within(() => {
        return cy.get('.post__body').scrollIntoView().should('be.visible');
    });
});

Cypress.Commands.add('uiGetPostThreadFooter', (postId) => {
    return getPost(postId).find('.ThreadFooter');
});

Cypress.Commands.add('uiGetPostEmbedContainer', (postId) => {
    return cy.uiGetPostBody(postId).
        find('.file-preview__button').
        should('be.visible');
});

function getPost(postId) {
    if (postId) {
        return cy.get(`#post_${postId}`).should('be.visible');
    }

    return cy.getLastPost();
}
