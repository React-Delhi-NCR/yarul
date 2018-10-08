# List of Components
This file lists all components currently available:

## 1. Alert

```jsx
<Alert type="primary" className="mt-20">
    Primary Alert
</Alert>
```

## 2. Sidebar

```jsx
<Sidebar link={'I am a link'} />
```

## 3. Header

```jsx
<Header links={['one', 'two', 'three', 'four']}/>
```

## 4. Steps

```jsx
<Steps steps={[
    { title: 'Signup' },
    { title: 'Login' },
    { title: 'Profile' },
    { title: 'Something' },
    { title: 'Signup' },
    { title: 'Login' },
    { title: 'Profile' },
    { title: 'Something' },
    ]} active={3} />
```

## 5. FormInput
This has multiple variations
```jsx
<FormInput
    type="text"
    placeholder="text input"
    onChange={event => {
        console.log(event.target.value);
    }}
    />

<FormInput type="radio" value="left" name="side" />

<FormInput type="radio" value="right" name="side" />

<FormInput type="checkbox" value="single" name="numbers" />

<FormInput type="checkbox" value="multiple" name="numbers" />

<FormInput type="file" />

<FormInput type="file" placeholder="upload image" />

<FormInput
        type="select"
        options={[{ value: '0', name: 'zero' }, { value: '1', name: 'one' }]}
      />

<FormInput type="select" />

<FormInput type="textarea" />

<FormInput type="password" />
```