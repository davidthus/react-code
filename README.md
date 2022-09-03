# Accessibility

## Accessible Rich Internet Applications - Aria labels  

All aria-* HTML attributes are fully supported in JSX. Whereas most DOM properties and attributes in React are camelCased, these attributes should be hyphen-cased (also known as kebab-case, lisp-case, etc) as they are in plain HTML.

## Labeling

Every HTML form control, such as <input> and <textarea>, needs to be labeled accessibly. We need to provide descriptive labels that are also exposed to screen readers.

Although these standard HTML practices can be directly used in React, note that the for attribute is written as htmlFor in JSX.

## Focus control

Keyboard focus refers to the current element in the DOM that is selected to accept input from the keyboard.
Only ever use CSS that removes this outline, for example by setting outline: 0, if you are replacing it with another focus outline implementation.

## Mechanisms to skip to desired content

Provide a mechanism to allow users to skip past navigation sections in your application as this assists and speeds up keyboard navigation.

Skiplinks or Skip Navigation Links are hidden navigation links that only become visible when keyboard users interact with the page. They are very easy to implement with internal page anchors and some styling:

## Landmark elements
Also use landmark elements and roles, such as <main> and <aside>, to demarcate page regions as assistive technology allow the user to quickly navigate to these sections.

## Reseting focus
Our React applications continuously modify the HTML DOM during runtime, sometimes leading to keyboard focus being lost or set to an unexpected element. In order to repair this, we need to programmatically nudge the keyboard focus in the right direction. For example, by resetting keyboard focus to a button that opened a modal window after that modal window is closed.

To set focus in React, we can use Refs to DOM elements.

`textInput.current.focus();`

## Setting the document title
Set the document `<title>` to correctly describe the current page content as this ensures that the user remains aware of the current page context:



