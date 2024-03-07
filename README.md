# RepositoryItem Component

This component is used to display a single repository item in the application.

## Props

- `repository`: An object containing the details of the repository.

## Styles

The component uses the following styles:

- `avatar`: Styles for the repository owner's avatar. It's a circular image with a width and height of 50 pixels.
- `container`: Styles for the container of the component. It has a padding of 10 pixels, uses space-between for justifyContent, and has a gap of 20 pixels between child components. The background color is white.
- `header`: Styles for the header of the component. It's a row layout with a gap of 15 pixels between child components.
- `fullName`: Styles for the full name of the repository.

## Usage

```jsx
import RepositoryItem from './RepositoryItem';

<RepositoryItem repository={repository} />;
```
