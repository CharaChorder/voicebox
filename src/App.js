import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import VoiceBoxMain from "./components/VoiceBoxMain";
import React from "react";

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const iq_eqLink = "https://charachorder.io/";
const canonicalLink = "https://voicebox.charachorder.io/";
const fossLink = "https://charachorder.github.io/voicebox/";

function App() {
	return (<ThemeProvider theme={darkTheme}>
		<CssBaseline enableColorScheme/>
		<div className="App">
			<header className="App-header">
				<a href={iq_eqLink} target={"_blank"} rel="noopener"><img src="logo512.png" className="App-logo"
				                                                         alt="logo"/></a>
				<h1>
					VoiceBox
				</h1>
			</header>
			<div className="App-body">
				<VoiceBoxMain id={"VoiceBox-main"}/>
			</div>
		</div>
		<footer>
			<div className="App-footer">
				<small>&copy; 2023-2025 by <a href={iq_eqLink} target={"_blank"} rel="noopener">CharaChorder</a></small>
			</div>
			<div className="App-footer">
				<img src="white-short.svg" alt="Translated by Google"/>
			</div>
			<div className="Disclaimer">
				<small>
					This service may contain translations powered by Google. CharaChorder, iq-eq and Google disclaim all
					warranties related to the translations, express or implied, including any warranties of accuracy, reliability,
					and any implied warranties of merchantability, fitness for a particular purpose and noninfringement.
				</small>
				<br/>
				<small>
					We (CharaChorder) do not collect any data when you use the <a href={fossLink}>GitHub pages version</a>.
					<br/>
					However, Google may collect data from your use of the Translate with Google feature, and as we use
					Google's TTS service.
					Additionally, if you use the <a href={canonicalLink}>version hosted by us through CloudFlare</a>,
					CloudFlare may collect data and we may use some of that for metrics, bugfixes, etc.
					We do not sell any data we collect.
					Please refer to the privacy policies of Google Cloud Text-to-Speech, Google Translate, and
					CloudFlare for more information.
					We recommend you do not enter any personal information into this service and will not be held liable
					or responsible if you do and/or something bad happens.
				</small>
			</div>
		</footer>
	</ThemeProvider>);
}

export default App;
