
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const __MISE_DIFF: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const ANDROID_HOME: string;
	export const NVM_CD_FLAGS: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const MallocNanoZone: string;
	export const APPLICATIONINSIGHTS_CONFIGURATION_CONTENT: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const SDKMAN_PLATFORM: string;
	export const npm_config_local_prefix: string;
	export const ZSH: string;
	export const LC_ALL: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const LS_COLORS: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const FLUTTER_ROOT: string;
	export const SSH_AUTH_SOCK: string;
	export const PURO_ROOT: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const LaunchInstanceID: string;
	export const _: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const JAVA_HOME: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const P9K_SSH: string;
	export const VSCODE_ESM_ENTRYPOINT: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const npm_config_npm_version: string;
	export const XPC_FLAGS: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const GEMINI_API_KEY: string;
	export const HOME: string;
	export const SHLVL: string;
	export const ANTHROPIC_BASE_URL: string;
	export const __MISE_ORIG_PATH: string;
	export const APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
	export const RIO_CONFIG_HOME: string;
	export const VSCODE_NLS_CONFIG: string;
	export const APPLICATION_INSIGHTS_NO_STATSBEAT: string;
	export const MISE_SHELL: string;
	export const npm_config_cache: string;
	export const ANTHROPIC_AUTH_TOKEN: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const SDKMAN_DIR: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const VSCODE_IPC_HOOK: string;
	export const BUN_INSTALL: string;
	export const GOPATH: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const VSCODE_PID: string;
	export const KILOCODE_POSTHOG_API_KEY: string;
	export const ANDROID_NDK_HOME: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const __MISE_SESSION: string;
	export const SECURITYSESSIONID: string;
	export const VSCODE_CWD: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		__MISE_DIFF: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		NODE: string;
		INIT_CWD: string;
		ANDROID_HOME: string;
		NVM_CD_FLAGS: string;
		SHELL: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		MallocNanoZone: string;
		APPLICATIONINSIGHTS_CONFIGURATION_CONTENT: string;
		COLOR: string;
		npm_config_noproxy: string;
		SDKMAN_PLATFORM: string;
		npm_config_local_prefix: string;
		ZSH: string;
		LC_ALL: string;
		NVM_DIR: string;
		USER: string;
		LS_COLORS: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		SDKMAN_CANDIDATES_API: string;
		FLUTTER_ROOT: string;
		SSH_AUTH_SOCK: string;
		PURO_ROOT: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		PAGER: string;
		ELECTRON_RUN_AS_NODE: string;
		LSCOLORS: string;
		PATH: string;
		npm_package_json: string;
		LaunchInstanceID: string;
		_: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		JAVA_HOME: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		P9K_SSH: string;
		VSCODE_ESM_ENTRYPOINT: string;
		npm_package_name: string;
		LANG: string;
		npm_config_npm_version: string;
		XPC_FLAGS: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		GEMINI_API_KEY: string;
		HOME: string;
		SHLVL: string;
		ANTHROPIC_BASE_URL: string;
		__MISE_ORIG_PATH: string;
		APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
		RIO_CONFIG_HOME: string;
		VSCODE_NLS_CONFIG: string;
		APPLICATION_INSIGHTS_NO_STATSBEAT: string;
		MISE_SHELL: string;
		npm_config_cache: string;
		ANTHROPIC_AUTH_TOKEN: string;
		LESS: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		SDKMAN_DIR: string;
		VSCODE_CODE_CACHE_PATH: string;
		VSCODE_IPC_HOOK: string;
		BUN_INSTALL: string;
		GOPATH: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		VSCODE_PID: string;
		KILOCODE_POSTHOG_API_KEY: string;
		ANDROID_NDK_HOME: string;
		SDKMAN_CANDIDATES_DIR: string;
		__MISE_SESSION: string;
		SECURITYSESSIONID: string;
		VSCODE_CWD: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
