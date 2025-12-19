# MINA SSHD - ECMA/TypeScript Conversion

This directory contains pseudo-ECMA (ECMAScript/TypeScript) equivalents of the Apache MINA SSHD Java interfaces.

## Overview

The original Java source files have been converted to TypeScript interfaces that maintain the same semantic structure and functionality while adapting to JavaScript/ECMAScript idioms.

## Key Conversions

### Java → TypeScript Mappings

| Java | TypeScript |
|------|-----------|
| `interface` | `interface` |
| `void` | `void` |
| `boolean` | `boolean` |
| `String` | `string` |
| `int` | `number` |
| `IOException` | `Error` |
| `InputStream` | `Readable` (Node.js stream) |
| `OutputStream` | `Writable` (Node.js stream) |
| `EnumSet<T>` | `Set<T>` |
| `Map<K, V>` | `Map<K, V>` |
| Static constants | `namespace` or `enum` |

## File Structure

- **Core Interfaces**
  - `PasswordAuthenticator.ts` - Password-based authentication
  - `PublickeyAuthenticator.ts` - Public key authentication
  - `UserAuth.ts` - Base user authentication interface
  - `Command.ts` - Command execution interface
  - `CommandFactory.ts` - Factory for creating commands

- **Session Management**
  - `ServerSession.ts` - SSH server session representation
  - `ChannelSession.ts` - SSH channel session representation
  - `SessionAware.ts` - Marker interface for session-aware objects
  - `ChannelSessionAware.ts` - Marker interface for channel-aware objects

- **Environment & Signals**
  - `Environment.ts` - Terminal environment and PTY configuration
  - `Signal.ts` - SSH signal enumeration
  - `SignalListener.ts` - Signal event listener
  - `ExitCallback.ts` - Shell exit notification callback

- **Factory & Configuration**
  - `ServerFactoryManager.ts` - SSH server configuration manager

## Usage Example

```typescript
import { 
  PasswordAuthenticator, 
  ServerSession 
} from './mina_serv_ecma';

class MyPasswordAuthenticator implements PasswordAuthenticator {
  authenticate(username: string, password: string, session: ServerSession): boolean {
    // Implement password validation
    return username === 'admin' && password === 'secret';
  }
}
```

## Notes

- These are pseudo-ECMA conversions - they represent the interface structure and semantics
- Stream handling uses Node.js `Readable`/`Writable` interfaces
- Environment variables and PTY modes are represented as enums and constants
- Method overloading is achieved through TypeScript function overloads
- All classes use modern ES2020+ features

## License

Licensed under the Apache License, Version 2.0. See individual files for full license text.
