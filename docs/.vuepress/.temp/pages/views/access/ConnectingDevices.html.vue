<template><h1 id="connecting-devices" tabindex="-1"><a class="header-anchor" href="#connecting-devices" aria-hidden="true">#</a> Connecting devices</h1>
<h2 id="adding-custom-model" tabindex="-1"><a class="header-anchor" href="#adding-custom-model" aria-hidden="true">#</a> Adding custom model</h2>
<p>You can add new custom models to apply MQTT devices. Click the <strong><u>+ Add Model</u></strong> button on the top right side, an Add Model window will pop up.Fill in the form to add a new custom model. You can also upload a device image of which size is smaller than 500 KB.</p>
<h2 id="adding-devices" tabindex="-1"><a class="header-anchor" href="#adding-devices" aria-hidden="true">#</a> Adding devices</h2>
<h3 id="adding-single-device" tabindex="-1"><a class="header-anchor" href="#adding-single-device" aria-hidden="true">#</a> Adding single device</h3>
<p>1、Go to <strong>Devices</strong>, click the <strong>+ Add Device</strong> button on the top right side.</p>
<p>2、An Add Device window will pop up, fill in the form and click the <strong>Add</strong> button to add a new device. For &quot;SIM ICCID&quot; field, users can choose to provide or not provide relevant information because the Platform will automatically collect this information. If the <strong>Allow for connection after it has changed</strong> checkbox is checked, the Platform is allowed to do additional updates after the SIM information is initially populated, such as replacing the SIM card. If not, the Platform will reject the connection to the device if you replace the SIM card after the information is initially populated. You can also assign a specific alias, add tags and custom attributes to the device.</p>
<h3 id="importing-devices" tabindex="-1"><a class="header-anchor" href="#importing-devices" aria-hidden="true">#</a> Importing devices</h3>
<p>1、Click the <strong>Import</strong> button and an Import window will pop up. <em>Please note: Only new custom model devices can be imported. Import up to 5000 devices at a time.</em></p>
<p>2、By choosing <code>CSV</code> or <code>Excel</code> format and click the <strong>Download</strong> button, a corresponding device information import template will ask to be downloaded (If you have downloaded the import template already, you may skip this step).</p>
<p>3、After downloading the device information import template, you can fill in the form.</p>
<p>These are fields in the template:</p>
<ul>
<li>
<p>&quot;SerialNumber&quot;, &quot;Group&quot;, &quot;Model&quot; are required fields:</p>
<ul>
<li>SerialNumber: Unique identifier of the device.</li>
<li>Group: The group name to which the device belongs. A group must exist in the system first, and has a corresponding relationship with the model. If it is not, please add it to the system first.</li>
<li>Model: Model name of the device.</li>
</ul>
</li>
<li>
<p>The remaining fields are optional:</p>
<ul>
<li>Alias: Must be 1-40 characters, special symbols only include &quot;_&quot; and &quot;-&quot;.</li>
<li>SimICCID: Must be 20 digits.</li>
<li>SimAutoUpdate: &quot;0&quot; means non-automatic update, &quot;1&quot; means automatic. By default it is 1, and leaving it empty is also regarded as the same.</li>
<li>Description: No more than 256 characters.</li>
<li>Tags: Must be 1-50 characters, including the numbers 0-9, the letters a-z and A-Z, the characters &quot;-&quot;, &quot;.&quot;, &quot;_&quot;, &quot;@&quot;, &quot;$&quot; and blank space. The number of tags for a device does not exceed 20 tags and tags are separated by &quot;,&quot;.</li>
<li>Attribute: The attribute is filled in by the header, such as &quot;attribute:xx&quot;, which means adding an attribute whose name is xx. Must be 1-50 characters, including the numbers 0-9, the letters a-z and A-Z, the characters &quot;-&quot;, &quot;.&quot;, &quot;_&quot;, &quot;@&quot;, &quot;$&quot; and blank space.</li>
</ul>
</li>
<li>
<p>Example:</p>
<table>
<thead>
<tr>
<th>SerialNumber</th>
<th>Alias</th>
<th>Group</th>
<th>Model</th>
<th>SimICCID</th>
<th>Description</th>
<th>Tags</th>
<th>Attribute.Address</th>
</tr>
</thead>
<tbody>
<tr>
<td>861901268000009</td>
<td>tmx07_0009</td>
<td>tmx07_20m</td>
<td>TMX07</td>
<td></td>
<td>Device 1</td>
<td>San Antonio, Atlanta</td>
<td>9442 North Capital of Texas Hwy</td>
</tr>
<tr>
<td>801046031113285</td>
<td>tmx08_3285</td>
<td>tmx08_2h</td>
<td>TMX08</td>
<td></td>
<td>Device 2</td>
<td>San Antonio, Atlanta</td>
<td>9445 North Capital of Texas Hwy</td>
</tr>
<tr>
<td>801046031097369</td>
<td>tmx08_7369</td>
<td>tmx08_1h</td>
<td>TMX08</td>
<td></td>
<td>Device 3</td>
<td>San Antonio, Atlanta</td>
<td>9442 North Capital of Texas Hwy</td>
</tr>
</tbody>
</table>
</li>
</ul>
<p>4、Finally, click the <strong>Upload File</strong> button to select the file, and click the <strong>Import</strong> button to upload the file to import the devices. if some errors occurred during the import, the error details will be displayed in the Import Log section. The import will be terminated, and it does no impact on device list.</p>
</template>
