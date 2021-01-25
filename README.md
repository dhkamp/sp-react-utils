sp-react-utils
---

### useListItems

```jsx
const MyFunctionComponent = ({ listurl }) => {

    const fieldrefs = ['Title', 'ID', 'MyCustomFieldName'];
    const [rowlimit, setRowlimit] = useState(0); 

    const [items, error] = useListItems(sp, listurl, fieldrefs);
    return (
        <ul>
            <button OnClick={() => setRowlimit(rowlimit + 1)}>more</button>
            {items.map(item => <li>{item['Title']</li>)}
        </ul>
    )
}
```