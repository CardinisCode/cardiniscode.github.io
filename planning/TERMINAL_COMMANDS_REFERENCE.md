# Terminal Commands Reference

## Port Conflict Resolution

### Kill Process Using Specific Port

**Find process using port 4000:**
```bash
lsof -ti:4000
```

**Kill process by PID:**
```bash
kill -9 [PID]
```

**Kill all processes on port 4000:**
```bash
kill -9 $(lsof -ti:4000)
```

### Alternative Port Usage

**Start Jekyll on different port:**
```bash
jekyll serve --port 4001
```

### Process Management

**Check for Jekyll processes:**
```bash
ps aux | grep jekyll
```

**Kill all Jekyll processes:**
```bash
pkill -f jekyll
```

## Common Development Commands

### Jekyll Commands
```bash
# Start Jekyll server
jekyll serve

# Start with live reload
jekyll serve --livereload

# Build site without serving
jekyll build

# Start on specific port
jekyll serve --port 4001
```

### Process Management
```bash
# Find processes by name
ps aux | grep [process_name]

# Kill process by name
pkill -f [process_name]

# Kill process by PID
kill -9 [PID]
```

## Troubleshooting

### Port Already in Use Error
When you see: `Error: Address already in use - bind(2) for 0.0.0.0:4000`

1. Find the process: `lsof -ti:4000`
2. Kill it: `kill -9 $(lsof -ti:4000)`
3. Or use different port: `jekyll serve --port 4001`

### Permission Denied
If you get permission errors, try:
```bash
sudo lsof -ti:4000
sudo kill -9 $(sudo lsof -ti:4000)
```
