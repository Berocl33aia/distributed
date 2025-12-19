/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * SSH Signal enumeration
 * Represents various signals that can be sent over SSH connections
 * 
 * @enum Signal
 */
export enum Signal {
  /** SIGTERM - Termination signal */
  TERM = 'TERM',
  
  /** SIGKILL - Kill signal */
  KILL = 'KILL',
  
  /** SIGABRT - Abort signal */
  ABRT = 'ABRT',
  
  /** SIGALRM - Alarm signal */
  ALRM = 'ALRM',
  
  /** SIGCONT - Continue signal */
  CONT = 'CONT',
  
  /** SIGHUP - Hangup signal */
  HUP = 'HUP',
  
  /** SIGINT - Interrupt signal */
  INT = 'INT',
  
  /** SIGPIPE - Broken pipe signal */
  PIPE = 'PIPE',
  
  /** SIGQUIT - Quit signal */
  QUIT = 'QUIT',
  
  /** SIGSTOP - Stop signal */
  STOP = 'STOP',
  
  /** SIGTSTP - Terminal stop signal */
  TSTP = 'TSTP',
  
  /** SIGTTIN - Terminal input signal */
  TTIN = 'TTIN',
  
  /** SIGTTOU - Terminal output signal */
  TTOU = 'TTOU',
  
  /** SIGUSR1 - User signal 1 */
  USR1 = 'USR1',
  
  /** SIGUSR2 - User signal 2 */
  USR2 = 'USR2',
}
