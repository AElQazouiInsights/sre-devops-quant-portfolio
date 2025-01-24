# Setting Up Developer Environment with Cmder

## Installation

1. Download Cmder from [cmder.net](https://cmder.net)
2. Extract to `C:\Users\<WindowUser>\bin\cmder`

## Environment Setup

### System Variables

```bash
CMDER_ROOT=C:\Users\<WindowUser>\bin\cmder
CMDER_HOME=C:\Users\<WindowUser>\bin\cmder
ConEmuDir=[cmder_root]\vendor\conemu-maximus5
PATH=%PATH%;C:\Users\<WindowUser>\bin\cmder
```

### Shell Configuration

1. Create/edit in `C:\Users\<WindowUser>`:
   - `.bashrc` for per-session settings
   - `.bash_profile` for login settings

2. Example `.bashrc`:

```bash
# Aliases
alias ls='ls --color=auto'
alias ll='ls -lah'
```

## Customizing Git Bash Prompt

1. Edit `C:\Users\<WindowsUser>\bin\cmder\vendor\git-for-windows\etc\profile.d\git-prompt.sh`

2. Replace `λ` with `$`:

```bash
# PS1="$PS1"'λ '  # Comment out original
PS1="$PS1"'$ '    # Add new prompt
```

## VS Code Integration

1. Open VS Code settings.json
2. Add configuration:
```json
{
  "terminal.integrated.defaultProfile.windows": "Cmder",
  "terminal.integrated.profiles.windows": {
    "Cmder": {
      "name": "Cmder",
      "path": ["${env:CMDER_ROOT}\\vendor\\git-for-windows\\bin\\bash.exe"],
      "icon": "terminal-cmd",
      "color": "terminal.ansiGreen"
    }
  }
}
```

## Key Features

- Unix commands on Windows
- Git integration
- Multiple shells (CMD, PowerShell, WSL)
- SSH capability
- Bash scripting support

## Best Practices

1. Store development tools in `C:\Users\<WindowUser>\bin`
2. Use `.bashrc` for aliases instead of `user_aliases.cmd`
3. Keep Cmder and VS Code updated
4. Configure environment variables before setup
5. Test terminal integration after updates

## Troubleshooting

- If prompt shows issues with Conda: Update prompt symbol
- Path problems: Verify environment variables
- VS Code integration fails: Check CMDER_ROOT path
