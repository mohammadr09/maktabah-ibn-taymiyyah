```tsx
<select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        style={{ marginTop: '20px' }}
      >
        {themeSelection.map((th) => (
          <option key={th} value={th}>
            {th}
          </option>
        ))}
      </select>
```