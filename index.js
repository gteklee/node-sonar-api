const fetch = require('node-fetch');

if(typeof Promise === 'undefined') {
    Promise = require('es6-promise').Promise;
}

/**
 * Makes http request and returns a promise.
 * Uses the callback if defined.
 * 
 * @param {String} host
 * @param {Object} obj
 * @param {String} path
 * @param {Object} headers 
 * @param {Function} callback 
 */
function makeRequestAndCreatePromise(host, obj, path, headers, callback) {
    // If object is specified
    if(obj) {
        if(typeof obj === 'function') { // Is it being used as callback?
            callback = obj;
        } else { // Generate path
            path = generatePath(obj, path);
        }
    }
    // Create the promise
    let promise = new Promise((resolve, reject) => {
        fetch('https://' + host + path, { // Make http request
            headers: headers
        })
            .then(res => res.json())
            .then(json => {
                if(json) {
                    // Check if callback is defined
                    if(callback && typeof callback === 'function') {
                        callback(json);
                    }
                    resolve(json);
                } else {
                    reject(new Error('Error retreiving JSON data!'));
                }
            });
    });
    // Return promise
    return promise;
}

function makePatchRequestAndCreatePromise(host, obj, path, headers, callback) {
    // If object is specified
    if(obj) {
        if(typeof obj === 'function') { // Is it being used as callback?
            callback = obj;
        } else { // Generate path
            path = generatePath(obj, path);
        }
    }
    // Create the promise
    let promise = new Promise((resolve, reject) => {
        fetch('https://' + host + path, { // Make http request
            method: 'PATCH',
            headers: headers
        })
            .then(res => res.json())
            .then(json => {
                if(json) {
                    // Check if callback is defined
                    if(callback && typeof callback === 'function') {
                        callback(json);
                    }
                    resolve(json);
                } else {
                    reject(new Error('Error retreiving JSON data!'));
                }
            });
    });
    // Return promise
    return promise;
}

/**
 * Generate path based on object properties.
 * 
 * @param {Object} obj 
 * @param {String} path 
 */
function generatePath(obj, path) {
    
    let started = false; // parameter path has been started?
    for(let prop in obj) {
        if(started) {
            path += '&' + prop + '=' + obj[prop];
        } else {
            path += '?' + prop + '=' + obj[prop];
            started = true;
        }
    }
    return path;
}

/**
 * Interaction with Sonar API through functions.
 * Supports promises and callbacks of each API call.
 * 
 * @param {Object} credentials 
 */
function Sonar(connection_object) {
    // Create autherization header with username and password
    const _sonarAuthHeader = {'Authorization': 'Basic ' + new Buffer(connection_object.sonarUsername + ':' + connection_object.sonarPassword).toString('base64')};

    // Each "get all" path of the Sonar API
    this.getAll = {

        /**
         * Get all accounts in the Sonar instance.
         * Limit and Page can be specified through an object.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        accounts: function(obj, callback) {
            // Build path
            let path = '/api/v1/accounts';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Get all of a property from a single account
        account: {

            _path: '/api/v1/accounts/',

            /**
             * Get all addresses on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            addresses: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/addresses';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all contacts on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            contacts: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/contacts';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all call logs on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            callLogs: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/call_logs';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all DIDs on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            dids: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/dids';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all data usage history on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            dataUsageHistories: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/data_usage_histories';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all ip assignments on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            ipAssignments: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/ip_assignments';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all inventory items on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            inventory: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/inventory_items';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all invoices on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            invoices: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/invoices';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            // Get all of a property of an invoice
            invoice: {

                __path: '/api/v1/accounts/',

                /**
                 * Get all credits on an invoice.
                 * 
                 * @param {Number} account_id
                 * @param {Number} invoice_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                credits: function(account_id, invoice_id, obj, callback) {
                    // build path
                    let path = this.__path + account_id + '/invoices/' + invoice_id + '/credits';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get all debits on an invoice.
                 * 
                 * @param {Number} account_id
                 * @param {Number} invoice_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                debits: function(account_id, invoice_id, obj, callback) {
                    // build path
                    let path = this.__path + account_id + '/invoices/' + invoice_id + '/debits';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                }
            },

            /**
             * Get all payment methods on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            paymentMethods: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/payment_methods';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all services on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            services: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/services';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all tax overrides on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            taxOverrides: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/account_tax_overrides';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            // All account billing info
            billing: {

                __path: '/api/v1/accounts/',

                /**
                 * Get all billing details of an account.
                 * 
                 * @param {Number} account_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                details: function(account_id, obj, callback) {
                    // Build path
                    let path = this.__path + account_id + '/billing_details';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get all billing parameters of an account.
                 * 
                 * @param {Number} account_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                parameters: function(account_id, obj, callback) {
                    // Build path
                    let path = this.__path + account_id + '/billing_parameters';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },
            },

            // Transactions
            transactions: {

                __path: '/api/v1/accounts/',

                /**
                 * Get all transaction debits on an account.
                 * 
                 * @param {Number} account_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                debits: function(account_id, obj, callback) {
                    // Build path
                    let path = this.__path + account_id + '/transactions/debits';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get all transaction deposits on an account.
                 * 
                 * @param {Number} account_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                deposits: function(account_id, obj, callback) {
                    // Build path
                    let path = this.__path + account_id + '/transactions/deposits';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get all transaction discounts on an account.
                 * 
                 * @param {Number} account_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                discounts: function(account_id, obj, callback) {
                    // Build path
                    let path = this.__path + account_id + '/transactions/discounts';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get all transaction payments on an account.
                 * 
                 * @param {Number} account_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                payments: function(account_id, obj, callback) {
                    // Build path
                    let path = this.__path + account_id + '/transactions/payments';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                }
            },

            /**
             * Get all contracts on an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            contracts: function(account_id, obj, callback) {
                // Build path
                let path = this._path + account_id + '/contracts';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get all address lists in the Sonar instance.
         * Limit and Page can be specified through an object.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        addressLists: function(obj, callback) {
            // Build path
            let path = '/api/v1/network/provisioning/address_lists';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        /**
         * Get all alerting rotations in the Sonar instance.
         * Limit and Page can be specified through an object.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        alertingRotations: function(obj, callback) {
            // Build path
            let path = '/api/v1/network/monitoring/alerting_rotations';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Alerting rotation properties
        alertingRotation: {

            _path: '/api/v1/network/monitoring/alerting_rotations/',

            /**
             * Get all day/times of an alerting rotation.
             * Limit and Page can be specified through an object.
             * 
             * @param {Number} alertingRotation_id 
             * @param {Number} obj 
             * @param {Function} callback 
             */
            days: function(alertingRotation_id, obj, callback) {
                // Build path
                let path = this._path + alertingRotation_id + '/alerting_rotation_days';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get all DHCP Servers in the Sonar instance.
         * Limit and Page can be specified through an object.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        dhcpServers: function(obj, callback) {
            // Build path
            let path = '/api/v1/network/provisioning/dhcp_servers';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        /**
         * Get all DHCP Server Identifiers in the Sonar instance.
         * Limit and Page can be specified through an object.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        dhcpServerIds: function(obj, callback) {
            // Build path
            let path = '/api/v1/network/provisioning/dhcp_server_identifiers';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        /**
         * Get all DIDs in the Sonar instance.
         * Limit and Page can be specified through an object.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        dids: function(obj, callback) {
            // Build path
            let path = '/api/v1/system/voice/dids';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        /**
         * Get all files in the Sonar instance.
         * Limit and Page can be specified through an object.
         * 
         * @param {String} entity
         * @param {Number} entity_id
         * @param {Object} obj
         * @param {Function} callback
         */
        files: function(entity, entity_id, obj, callback) {
            // Build path
            let path = '/api/v1/' + entity + '/' + entity_id + '/files';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Get all financial properties
        financial: {

            _path: '/api/v1/financial',

            /**
             * Get all taxes in the Sonar instance.
             * Limit and Page can be specified through an object.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            taxes: function(obj, callback) {
                // Build path
                let path = this._path + '/taxes';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            // Get all of a property of a tax
            tax: {
                __path: '/api/v1/financial/taxes/',

                /**
                 * Get all geotaxes for a tax in the Sonar instance.
                 * Limit and Page can be specified through an object.
                 * 
                 * @param {Number} tax_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                geoTaxes: function(tax_id, obj, callback) {
                    // Build path
                    let path = this.__path + tax_id + '/geotaxes';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                }
            },

            /**
             * Get all general ledger codes in the Sonar instance.
             * Limit and Page can be specified through an object.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            generalLedgerCodes: function(obj, callback) {
                // Build path
                let path = this._path + '/general_ledger_codes';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all invoice messages.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            invoiceMessages: function(obj, callback) {
                // Build path
                let path = this._path + '/invoices/invoice_messages';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        // Get all of a property from IPAM
        ipam: {
            _path: '/api/v1/network/ipam/supernets',

            /**
             * Get a list of all supernets (top level subnet).
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            supernets: function(obj, callback) {
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, this._path, _sonarAuthHeader, callback);
            },

            /**
             * Get a list of all subnets within a supernet.
             * 
             * @param {Number} supernet_id
             * @param {Object} obj
             * @param {Function} callback
             */
            subnets: function(supernet_id, obj, callback) {
                // Build path
                let path = this._path + '/' + supernet_id + '/subnets';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get a list of all IP Pools within
             * a subnet.
             * 
             * @param {Number} supernet_id
             * @param {Number} subnet_id
             * @param {Object} obj
             * @param {Function} callback
             */
            ipPools: function(supernet_id, subnet_id, obj, callback) {
                // Build path
                let path = this._path + '/' + supernet_id + '/subnets/' + subnet_id + '/ip_pools';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get all inbound email accounts in the
         * Sonar Instance.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        inboundEmailAccounts: function(obj, callback) {
            // Build path
            let path = '/api/v1/system/tickets/inbound_email_accounts';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        /**
         * Get all inline devices in the Sonar Instance.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        inlineDevices: function(obj, callback) {
            // Build path
            let path = '/api/v1/network/provisioning/inline_devices';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Get all of a property of the inventory items
        inventory: {
            _path: '/api/v1/inventory',

            /**
             * Get a list of categories of inventory.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            categories: function(obj, callback) {
                // Build path
                let path = this._path + '/categories';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all inventory items.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            items: function(obj, callback) {
                // Build path
                let path = this._path + '/items';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get a list of manufacturers in inventory.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            manufacturers: function(obj, callback) {
                // Build path
                let path = this._path + '/manufacturers';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get a list of physical locations.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */

            /**
             * Get a list of models in inventory
             * (descriptor for an item).
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            models: function(obj, callback) {
                // Build path
                let path = this._path + '/models';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            // Get all of a model property
            model: {
                __path: '/api/v1/inventory/models',

                /**
                 * Get a list of all model fields
                 * (definition of the fields on 
                 * the models).
                 * 
                 * @param {Number} model_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                fields: function(model_id, obj, callback) {
                    // Build path
                    let path = this.__path + '/' + model_id + '/fields';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get a list of all model deployment types.
                 * 
                 * @param {Number} model_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                deploymentTypes: function(model_id, obj, callback) {
                    // Build path
                    let path = this.__path + '/' + model_id + '/inventory_model_deployment_types';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get a list of depletion thresholds 
                 * for this model ID.
                 * 
                 * @param {Number} model_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                depletionThresholds: function(model_id, obj, callback) {
                    // Build path
                    let path = this.__path + '/' + model_id + '/depletion_thresholds';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                }
            },

            /**
             * Get a list of all physical locations
             * that inventory items can be stored.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            locations: function(obj, callback) {
                // Build path
                let path = this._path + '/inventory_locations';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get a list of all addresses for an
             * inventory location ID.
             * 
             * !! -- SEEMS TO BE BROKEN IN SONAR WITH
             * PERMISSIONS -- !!
             * 
             * @param {Number} location_id
             * @param {Object} obj
             * @param {Function} callback
             */
/**/            locationAddresses: function(location_id, obj, callback) {
                // Build path
                let path = '/api/v1/inventory_location/' + location_id + '/addresses';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get a list of generic inventory assignees.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            genericAssignees: function(obj, callback) {
                // Build path
                let path = this._path + '/generic_inventory_assignees';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get a list of vehicales inventory may be
             * assigned to.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            vehicles: function(obj, callback) {
                // Build path
                let path = this._path + '/vehicles';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get all jobs.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        jobs: function(obj, callback) {
            // Build path
            let path = '/api/v1/scheduling/jobs';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Get all properties of jobs
        job: {
            _path: '/api/v1/scheduling/jobs',

            /**
             * Get all job types.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            types: function(obj, callback) {
                // Build path
                let path = '/api/v1/scheduling/job_types';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all desired job date / times for 
             * a specific job.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            desiredDates: function(job_id, obj, callback) {
                // Build path
                let path = this._path + '/' + job_id + '/desired_job_datetimes';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        // Get all of a monitoring property
        monitoring: {
            _path: '/api/v1/network/monitoring',

            /**
             * Get all desired job date / times for 
             * a specific job.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            templates: function(obj, callback) {
                // Build path
                let path = this._path + '/monitoring_templates';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all monitoring graphs of a template.
             * 
             * @param {Number} template_id
             * @param {Object} obj
             * @param {Function} callback
             */
            graphs: function(template_id, obj, callback) {
                // Build path
                let path = this._path + '/monitoring_templates/' + template_id + '/monitoring_graphs';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all oid thresholds of template.
             * 
             * @param {Number} template_id
             * @param {Number} oid_id
             * @param {Object} obj
             * @param {Function} callback
             */
            oidThresholds: function(template_id, oid_id, obj, callback) {
                // Build path
                let path = this._path + '/monitoring_templates/' + template_id + '/snmp_oids/' + oid_id + '/snmp_oid_thresholds';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all SNMP OIDs for a specific template.
             * 
             * @param {Number} template_id
             * @param {Object} obj
             * @param {Function} callback
             */
            templateOids: function(template_id, obj, callback) {
                // Build path
                let path = this._path + '/monitoring_templates/' + template_id + '/snmp_oids';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get all network sites.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        networkSites: function(obj, callback) {
            // Build path
            let path = '/api/v1/network/network_sites';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Get all of a network site property
        networkSite: {

            _path: '/api/v1/network/network_sites',

            /**
             * Get a list of all existing IP assignemnts
             * from the network site.
             * 
             * @param {Number} networkSite_id
             * @param {Object} obj
             * @param {Function} callback
             */
            ipAssignments: function(networkSite_id, obj, callback) {
                // Build path
                let path = this._path + '/' + networkSite_id + '/ip_assignments';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get a list of the inventory in a specific
             * network site.
             * 
             * @param {Number} networkSite_id
             * @param {Object} obj
             * @param {Function} callback
             */
            inventory: function(networkSite_id, obj, callback) {
                // Build path
                let path = this._path + '/' + networkSite_id + '/inventory_items';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get a list of the addresses from a specific
             * network site.
             * 
             * @param {Number} networkSite_id
             * @param {Object} obj
             * @param {Function} callback
             */
/**/        addresses: function(networkSite_id, obj, callback) {
                // Build path
                let path = this._path + '/' + networkSite_id + '/addresses';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get all notes for an entity.
         * 
         * @param {String} entity_type
         * @param {Number} entity_id
         * @param {Object} obj
         * @param {Function} callback
         */
        notes: function(entity_type, entity_id, obj, callback) {
            // Build path
            let path = '/api/v1/notes/' + entity_type + '/' + entity_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },
        
        /**
         * Get all service packages in the Sonar instance.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        packages: function(obj, callback) {
            // Build path
            let path = '/api/v1/system/packages';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Get all of a property of RADIUS
        radius: {

            /**
             * Get all RADIUS accounts.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            accounts: function(account_id, obj, callback) {
                // Build path
                let path = '/api/v1/accounts/' + account_id + '/radius_accounts';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all RADIUS groups.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            groups: function(obj, callback) {
                // Build path
                let path = '/api/v1/network/provisioning/radius_groups';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all RADIUS accounts.
             * 
             * @param {Number} group_id
             * @param {Object} obj
             * @param {Function} callback
             */
            replyAttributes: function(group_id, obj, callback) {
                // Build path
                let path = '/api/v1/network/provisioning/radius_groups/' + group_id + '/attributes';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get all rate centers.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        rateCenters: function(obj, callback) {
            // Build path
            let path = '/api/v1/system/voice/rate_centers';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        }, 

        /**
         * Get all roles within the Sonar instance.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        roles: function(obj, callback) {
            // Build path
            let path = '/api/v1/roles';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        /**
         * Get all schedules in the Sonar instance.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        schedules: function(obj, callback) {
            // Build path
            let path = '/api/v1/scheduling/schedules';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Get all of a scheduled property
        scheduled: {

            /**
             * Get all scheduled events from a account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            events: function(account_id, obj, callback) {
                // Build path
                let path = '/api/v1/accounts/' + account_id + '/scheduled_events';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all schedule blockers in 
             * the Sonar instance.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            blockers: function(obj, callback) {
                // Build path
                let path = '/api/v1/scheduling/schedule_blockers';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all time offs scheduled in 
             * the Sonar instance.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            timeOffs: function(obj, callback) {
                // Build path
                let path = '/api/v1/scheduling/scheduled_time_offs';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        // Get all of a system property
        system: {

            _path: '/api/v1/system',

            /**
             * Get all services in the Sonar instance.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            services: function(obj, callback) {
                // Build path
                let path = this._path + '/services';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all custom fields 
             * the Sonar instance.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            customFields: function(obj, callback) {
                // Build path
                let path = this._path + '/custom_fields';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all address types
             * the Sonar instance.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            addressTypes: function(obj, callback) {
                // Build path
                let path = this._path + '/address_types';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            // Get all of a system billing property
            billing: {

                __path: '/api/v1/system',

                /**
                 * Get all billing free periods from a
                 * usage based billing policy.
                 * 
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                freePeriods: function(policy_id, obj, callback) {
                    // Build path
                    let path = this.__path + '/usage_based_billing_policies/' + policy_id + '/usage_based_billing_free_periods';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                policies: function(obj, callback) {
                    // Build path
                    let path = this.__path + '/usage_based_billing_policies';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                }
            },

            // Get all of a system account property
            account: {

                __path: '/api/v1/system',

                /**
                 * Get all account groups in 
                 * the Sonar instance.
                 * 
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                groups: function(obj, callback) {
                    // Build path
                    let path = this.__path + '/account_groups';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get all account statuses in 
                 * the Sonar instance.
                 * 
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                statuses: function(obj, callback) {
                    // Build path
                    let path = this.__path + '/account_statuses';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get all account types in 
                 * the Sonar instance.
                 * 
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                types: function(obj, callback) {
                    // Build path
                    let path = this.__path + '/account_types';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                }
            }
        },

        /**
         * Get all task templates in the
         * Sonar instance.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        taskTemplates: function(obj, callback) {
            // Build path
            let path = '/api/v1/system/misc/task_templates';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Get all of a task template property
        taskTemplate: {

            _path: '/api/v1/system/misc/task_templates',

            /**
             * Get all tasks from a specific template
             * 
             * @param {Number} template_id
             * @param {Object} obj
             * @param {Function} callback
             */
            tasks: function(template_id, obj, callback) {
                // Build path
                let path = this._path + '/' + template_id + '/template_tasks';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get all tasks from a specific entity.
         * 
         * @param {String} entity_type
         * @param {Number} entity_id
         * @param {Object} obj
         * @param {Function} callback
         */
        tasks: function(entity_type, entity_id, obj, callback) {
            // Build path
            let path = '/api/v1/' + entity_type + '/' + entity_id + '/tasks';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        /**
         * Get all tickets in the Sonar instance.
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        tickets: function(obj, callback) {
            // Build path
            let path = '/api/v1/tickets';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Get all of a ticket property
        ticket: {

            _path: '/api/v1/tickets',
            
            /**
             * Get all ticket categories in 
             * the Sonar instance.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            categories: function(obj, callback) {
                // Build path
                let path = '/api/v1/system/tickets/ticket_categories';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all ticket groups in 
             * the Sonar instance.
             * 
             * @param {Object} obj
             * @param {Function} callback
             */
            groups: function(obj, callback) {
                // Build path
                let path = '/api/v1/system/tickets/ticket_groups';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all ticket comments from a 
             * specific ticket.
             * 
             * @param {Number} ticket_id
             * @param {Object} obj
             * @param {Function} callback
             */
            comments: function(ticket_id, obj, callback) {
                // Build path
                let path = this._path + '/' + ticket_id + '/ticket_comments';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Get all ticket replies from a 
             * specific ticket.
             * 
             * @param {Number} ticket_id
             * @param {Object} obj
             * @param {Function} callback
             */
            replies: function(ticket_id, obj, callback) {
                // Build path
                let path = this._path + '/' + ticket_id + '/ticket_replies';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get all users in the Sonar instance
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        users: function(obj, callback) {
            // Build path
            let path = '/api/v1/users';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        /**
         * Get all voice providers in 
         * the Sonar instance
         * 
         * @param {Object} obj
         * @param {Function} callback
         */
        voiceProviders: function(obj, callback) {
            // Build path
            let path = '/api/v1/system/voice/voice_providers';
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        }
    };

    // Each "get" path of the Sonar API
    this.get = {

        /**
         * Get an individual account in the Sonar instance.
         * 
         * @param {Number} account_id
         * @param {Function} callback
         */
        Account: function(account_id, callback) {
            // Build path
            let path = '/api/v1/accounts/' + account_id;
            // // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        // Get a property of an individual account
        account: {

            _path: '/api/v1/accounts',

            /**
             * Get an address from an individual account.
             * 
             * @param {Number} account_id
             * @param {Number} address_id
             * @param {Function} callback
             */
            address: function(account_id, address_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/addresses/' + address_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get a call log from an individual account.
             * 
             * @param {Number} account_id
             * @param {Number} callLog_id
             * @param {Function} callback
             */
            callLog: function(account_id, callLog_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/call_logs/' + callLog_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual account contact.
             * 
             * @param {Number} account_id
             * @param {Number} contact_id
             * @param {Function} callback
             */
            contact: function(account_id, contact_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/contacts/' + contact_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual did from an account.
             * 
             * @param {Number} account_id
             * @param {Number} did_id
             * @param {Function} callback
             */
            did: function(account_id, did_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/dids/' + did_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual data usage history
             * from an account.
             * 
             * @param {Number} account_id
             * @param {Number} data_usage_id
             * @param {Function} callback
             */
            dataUsageHistory: function(account_id, data_usage_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/data_usage_histories/' + data_usage_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual ip assignment
             * from an account.
             * 
             * @param {Number} account_id
             * @param {Number} ip_id
             * @param {Function} callback
             */
            ipAssignment: function(account_id, ip_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/ip_assignments/' + ip_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            // Individual inventory properties
            inventory: {

                __path: '/api/v1/accounts',

                /**
                 * Get an individual inventory item
                 * from an account.
                 * 
                 * @param {Number} account_id
                 * @param {Number} ip_id
                 * @param {Function} callback
                 */
                item: function(account_id, item_id, callback) {
                    // Build path
                    let path = this.__path + '/' + account_id + '/inventory_items/' + item_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                }
            },

            /**
             * Get an individual inventory item
             * from an account.
             * 
             * @param {Number} account_id
             * @param {Number} invoice_id
             * @param {Function} callback
             */
            invoice: function(account_id, invoice_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/invoices/' + invoice_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual payment method
             * from an account
             * 
             * @param {Number} account_id
             * @param {Number} payment_method_id
             * @param {Function} callback
             */
            paymentMethod: function(account_id, payment_method_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/payment_methods/' + payment_method_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual account service
             * 
             * @param {Number} account_id
             * @param {Number} relationship_id
             * @param {Function} callback
             */
            service: function(account_id, relationship_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/services/' + relationship_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual tax override
             * from an account.
             * 
             * (requires super user permissions)
             * 
             * @param {Number} account_id
             * @param {Number} relationship_id
             * @param {Function} callback
             */
            taxOverride: function(account_id, tax_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/account_tax_overrides/' + tax_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            // Transactions
            transactions: {

                __path: '/api/v1/accounts',
                
                /**
                 * Get an individual account debit.
                 * 
                 * @param {Number} account_id
                 * @param {Number} debit_id
                 * @param {Function} callback
                 */
                debit: function(account_id, debit_id, callback) {
                    // Build path
                    let path = this.__path + '/' + account_id + '/transactions/debits/' + debit_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get an individual account deposit.
                 * 
                 * @param {Number} account_id
                 * @param {Number} deposit_id
                 * @param {Function} callback
                 */
                deposit: function(account_id, deposit_id, callback) {
                    // Build path
                    let path = this.__path + '/' + account_id + '/transactions/deposits/' + deposit_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get an individual account discount.
                 * 
                 * @param {Number} account_id
                 * @param {Number} discount_id
                 * @param {Function} callback
                 */
                discount: function(account_id, discount_id, callback) {
                    // Build path
                    let path = this.__path + '/' + account_id + '/transactions/discounts/' + discount_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get an individual account payment.
                 * 
                 * @param {Number} account_id
                 * @param {Number} payment_id
                 * @param {Function} callback
                 */
                payment: function(account_id, payment_id, callback) {
                    // Build path
                    let path = this.__path + '/' + account_id + '/transactions/payments/' + payment_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                }
            },

            /**
             * Get an individual contract from an account.
             * 
             * @param {Number} account_id 
             * @param {Number} contract_id 
             * @param {Function} callback 
             */
            contract: function(account_id, contract_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/contracts/' + contract_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual contract in base 64
             * from an account.
             * @param {Number} account_id 
             * @param {Number} contract_id 
             * @param {Function} callback 
             */
            contractBase64: function(account_id, contract_id, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/contracts/' + contract_id + '/base64';
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },
        },

        /**
         * Get an individual address list from the
         * Sonar Instance.
         * 
         * @param {Number} addressList_id 
         * @param {Function} callback 
         */
        addressList: function(addressList_id, callback) {
            // Build path
            let path = '/api/v1/network/provisioning/address_lists/' + addressList_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        /**
         * Get an individual alerting rotation from 
         * the Sonar Instance.
         * 
         * @param {Number} alertingRotation_id 
         * @param {Function} callback 
         */
        AlertingRotation: function(alertingRotation_id, callback) {
            // Build path
            let path = '/api/v1/network/monitoring/alerting_rotations/' + alertingRotation_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        // Alerting rotation properties
        alertingRotation: {

            _path: '/api/v1/network/monitoring/alerting_rotations/',

            /**
             * Get an individual alerting rotation day/time.
             * 
             * @param {Number} alertingRotation_id 
             * @param {Number} day_id 
             * @param {Function} callback 
             */
            day: function(alertingRotation_id, day_id, callback) {
                // Build path
                let path = this._path + alertingRotation_id + '/alerting_rotation_days/' + day_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get an individual DHCP Server Identifier
         * in the Sonar Instance.
         * 
         * @param {Number} dhcpServerId_id 
         * @param {Function} callback 
         */
        dhcpServerId: function(dhcpServerId_id, callback) {
            // Build path
            let path = '/api/v1/network/provisioning/dhcp_server_identifiers/' + dhcpServerId_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        /**
         * Get an individual DHCP Server from the
         * Sonar Instance.
         * 
         * @param {Number} dhcpServer_id 
         * @param {Function} callback 
         */
        dhcpServer: function(dhcpServer_id, callback) {
            // Build path
            let path = '/api/v1/network/provisioning/dhcp_servers/' + dhcpServer_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        /**
         * Get an individual DID from the 
         * Sonar instance.
         * 
         * @param {Number} did_id 
         * @param {Function} callback 
         */
        did: function(did_id, callback) {
            // Build path
            let path = '/api/v1/system/voice/dids/' + did_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        /**
         * 
         * @param {String} entity 
         * @param {Number} entity_id 
         * @param {Number} file_id 
         * @param {Function} callback 
         */
        file: function(entity, entity_id, file_id, callback) {
            // Build path
            let path = '/api/v1/' + entity + '/' + entity_id + '/files/' + file_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        // Financial properties
        financial: {

            _path: '/api/v1/financial',

            /**
             * Get an individual tax from the 
             * Sonar instance.
             * 
             * @param {Number} tax_id 
             * @param {Function} callback 
             */
            Tax: function(tax_id, callback) {
                // Build path
                let path = this._path + '/taxes/' + tax_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            // Get all of a property of a tax
            tax: {

                __path: '/api/v1/financial/taxes/',

                /**
                 * Get all geotaxes for a tax in the Sonar instance.
                 * Limit and Page can be specified through an object.
                 * 
                 * @param {Number} tax_id
                 * @param {Number} geoTax_id
                 * @param {Function} callback
                 */
                geoTax: function(tax_id, geoTax_id, callback) {
                    // Build path
                    let path = this.__path + tax_id + '/geotaxes/' + geoTax_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                }
            },

            /**
             * Get an individual ledger code from
             * the Sonar Instance.
             */
            generalLedgerCode: function(generalLedgerCode_id, callback) {
                // Build path
                let path = this._path + '/general_ledger_codes/' + generalLedgerCode_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },
        },

        // Properties of IPAM
        ipam: {
            _path: '/api/v1/network/ipam/supernets',

            /**
             * Get an individual supernet from
             * the Sonar instance.
             * 
             * @param {Number} supernet_id 
             * @param {Function} callback 
             */
            supernet: function(supernet_id, callback) {
                // Build path
                let path = this._path + '/' + supernet_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual subnet from
             * a supernet.
             * 
             * @param {Number} supernet_id 
             * @param {Number} subnet_id 
             * @param {Function} callback 
             */
            subnet: function(supernet_id, subnet_id, callback) {
                // Build path
                let path = this._path + '/' + supernet_id + '/subnets/' + subnet_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual ip pool from
             * a subnet.
             * 
             * @param {Number} supernet_id 
             * @param {Number} subnet_id 
             * @param {Number} ipPool_id 
             * @param {Funtion} callback 
             */
            ipPool: function(supernet_id, subnet_id, ipPool_id, callback) {
                // Build path
                let path = this._path + '/' + supernet_id + '/subnets/' + subnet_id + '/ip_pools/' + ipPool_id; 
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback); 
            }
        },

        /**
         * Get an individual inbound email account
         * from the Sonar instance.
         * 
         * @param {Number} inboundEmailAccount_id 
         * @param {Function} callback 
         */
        inboundEmailAccount: function(inboundEmailAccount_id, callback) {
            // Build path
            let path = '/api/v1/system/tickets/inbound_email_accounts/' + inboundEmailAccount_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        /**
         * Get an individual inline device
         * from the Sonar instance.
         * 
         * @param {Number} inlineDevice_id 
         * @param {Function} callback 
         */
        inlineDevice: function(inlineDevice_id, callback) {
            // Build path
            let path = '/api/v1/network/provisioning/inline_devices/' + inlineDevice_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        // Inventory properties
        inventory: {
            _path: '/api/v1/inventory',

            /**
             * Get an individual inventory category 
             * from the Sonar instance.
             * 
             * @param {Number} category_id 
             * @param {Function} callback 
             */
            category: function(category_id, callback) {
                // Build path
                let path = this._path + '/categories/' + category_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual inventory item
             * from the Sonar instance
             * 
             * @param {Number} item_id 
             * @param {Function} callback 
             */
            item: function(item_id, callback) {
                // Build path
                let path = this._path + '/items/' + item_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual manufacturer from
             * the Sonar instance.
             * 
             * @param {Number} manufacturer_id 
             * @param {Function} callback 
             */
            manufacturer: function(manufacturer_id, callback) {
                // Build path
                let path = this._path + '/manufacturers/' + manufacturer_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual model from
             * the Sonar instance.
             * 
             * @param {Number} model_id 
             * @param {Function} callback 
             */
            Model: function(model_id, callback) {
                // Build path
                let path = this._path + '/models/' + model_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            // Model properties
            model: {
                __path: '/api/v1/inventory/models',

                /**
                 * Get an individual field from
                 * an inventory model.
                 * 
                 * @param {Number} model_id 
                 * @param {Number} field_id 
                 * @param {Function} callback 
                 */
                field: function(model_id, field_id, callback) {
                    // Build path
                    let path = this.__path + '/' + model_id + '/fields/' + field_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get an individual deployment type
                 * from an inventory model.
                 * 
                 * @param {Number} model_id 
                 * @param {Number} deploymentType_id 
                 * @param {Function} callback 
                 */
                deploymentType: function(model_id, deploymentType_id, callback) {
                    // Build path
                    let path = this.__path + '/' + model_id + '/inventory_model_deployment_types/' + deploymentType_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get an individual depletion
                 * threshold from an inventory
                 * model.
                 * 
                 * @param {Number} model_id 
                 * @param {Number} depletionThreshold_id 
                 * @param {Function} callback 
                 */
                depletionThreshold: function(model_id, depletionThreshold_id, callback) {
                    // Build path
                    let path = this.__path + '/' + model_id + '/depletion_thresholds/' + depletionThreshold_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },
            },

            /**
             * Get an individual inventory
             * location address from the
             * Sonar instance.
             * 
             * !! -- SEEMS TO BE BROKEN IN SONAR WITH
             * PERMISSIONS -- !!
             * 
             * @param {Number} location_id 
             * @param {Number} address_id 
             * @param {Function} callback 
             */
            locationAddress: function(location_id, address_id, callback) {
                // Build path
                let path = this._path + '_locations/' + location_id + '/addresses/' + address_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual generic
             * assignee from inventory.
             * 
             * @param {Number} assignee_id 
             * @param {Function} callback 
             */
            genericAssignee: function(assignee_id, callback) {
                // Build path
                let path = this._path + '/generic_inventory_assignees/' + assignee_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual physical
             * inventory location.
             * 
             * @param {Number} location_id 
             * @param {Function} callback 
             */
            location: function(location_id, callback) {
                // Build path
                let path = this._path + '/inventory_locations/' + location_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual vehicle from
             * inventory.
             * 
             * @param {Number} vehicle_id 
             * @param {Function} callback 
             */
            vehicle: function(vehicle_id, callback) {
                // Build path
                let path = this._path + '/vehicles/' + vehicle_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            }
        },


        Job: function(job_id, callback) {
            // Build path
            let path = '/api/v1/scheduling/jobs/' + job_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        // Job properties
        job: {
            _path: '/api/v1/scheduling/jobs',

            /**
             * Get an individual job type from
             * the Sonar instance.
             * 
             * @param {Number} type_id 
             * @param {Function} callback 
             */
            type: function(type_id, callback) {
                // Build path
                let path = '/api/v1/scheduling/job_types/' + type_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual desired 
             * date / time of a job.
             * 
             * @param {Number} job_id 
             * @param {Number} date_id 
             * @param {Function} callback 
             */
            desiredDate: function(job_id, date_id, callback) {
                // Build path
                let path = this._path + '/' + job_id + '/desired_job_datetimes/' + date_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            }
        },

        // Monitoring properties
        monitoring: {
            _path: '/api/v1/network/monitoring',

            /**
             * Get an invividual monitoring template
             * from the Sonar instance.
             * 
             * @param {Number} template_id 
             * @param {Function} callback 
             */
            template: function(template_id, callback) {
                // Build path
                let path = this._path + '/monitoring_templates/' + template_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual monitoring graph
             * from a monitoring template.
             * 
             * @param {Number} template_id 
             * @param {Number} graph_id 
             * @param {Function} callback 
             */
            graph: function(template_id, graph_id, callback) {
                // Build path
                let path = this._path + '/monitoring_templates/' + template_id + '/monitoring_graphs/' + graph_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual SNMP OID threshold
             * from a template OID.
             * 
             * @param {Number} template_id 
             * @param {Number} oid_id 
             * @param {Number} threshold_id 
             * @param {Function} callback 
             */
            oidThreshold: function(template_id, oid_id, threshold_id, callback) {
                // Build path
                let path = this._path + '/monitoring_templates/' + template_id + '/snmp_oids/' + oid_id + '/snmp_oid_thresholds/' + threshold_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual OID from a 
             * monitoring template.
             * 
             * @param {Number} template_id 
             * @param {Number} oid_id 
             * @param {Function} callback 
             */
            templateOid: function(template_id, oid_id, callback) {
                // Build path
                let path = this._path + '/monitoring_templates/' + template_id + '/snmp_oids/' + oid_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },
        },

        /**
         * Get an individual network site from
         * the Sonar instance.
         * 
         * @param {Number} networkSite_id 
         * @param {Function} callback 
         */
        NetworkSite: function(networkSite_id, callback) {
            // Build path
            let path = '/api/v1/network/network_sites/' + networkSite_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        // Network site properties
        networkSite: {
            _path: '/api/v1/network/network_sites',

            /**
             * Get an individual ip assignment from
             * a network site.
             * 
             * @param {Number} networkSite_id 
             * @param {Number} ip_id 
             * @param {Function} callback 
             */
            ipAssignment: function(networkSite_id, ip_id, callback) {
                // Build path
                let path = this._path + '/' + networkSite_id + '/ip_assignments/' + ip_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual inventory item from
             * a network site. 
             * 
             * @param {Number} networkSite_id 
             * @param {Number} item_id 
             * @param {Function} callback 
             */
            inventory: function(networkSite_id, item_id, callback) {
                // Build path
                let path = this._path + '/' + networkSite_id + '/inventory_items/' + item_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual site address from
             * a network site.
             * 
             * @param {Number} networkSite_id 
             * @param {Number} address_id 
             * @param {Function} callback 
             */
            address: function(networkSite_id, address_id, callback) {
                // Build path
                let path = this._path + '/' + networkSite_id + '/addresses/' + address_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get an individual note from the
         * Sonar instance.
         * 
         * @param {String} entity_type 
         * @param {Number} entity_id 
         * @param {Number} note_id 
         * @param {Function} callback 
         */
        note: function(entity_type, entity_id, note_id, callback) {
            // Build path
            let path = '/api/v1/notes/' + entity_type + '/' + entity_id + '/' + note_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        /**
         * Get an individual package from
         * the Sonar instance.
         * 
         * @param {Number} package_id 
         * @param {Function} callback 
         */
        package: function(package_id, callback) {
            // Build path
            let path = '/api/v1/system/packages/' + package_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        // Radius properties
        radius: {
            _path: '/api/v1/network/provisioning/radius_groups',

            /**
             * Get an individual radius account from
             * an account in Sonar. 
             * 
             * @param {Number} account_id 
             * @param {Number} radius_account_id 
             * @param {Function} callback 
             */
            account: function(account_id, radius_account_id, callback) {
                // Build path
                let path = '/api/v1/accounts/' + account_id + '/radius_accounts/' + radius_account_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual radius group from
             * the Sonar instance. 
             * 
             * @param {Number} radius_group_id 
             * @param {Function} callback 
             */
            group: function(radius_group_id, callback) {
                // Build path
                let path = this._path + '/' + radius_group_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual reply attribute from
             * a radius group.
             * 
             * @param {Number} radius_group_id 
             * @param {Number} attribute_id 
             * @param {Function} callback 
             */
            replyAttributes: function(radius_group_id, attribute_id, callback) {
                // Build path
                let path = this._path + '/' + radius_group_id + '/attributes/' + attribute_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            }
        },

        /**
         * Get an individual rate center from
         * the Sonar instance.
         * 
         * @param {Number} rateCenter_id 
         * @param {Function} callback 
         */
        rateCenter: function(rateCenter_id, callback) {
            // Build path
            let path = '/api/v1/system/voice/rate_centers/' + rateCenter_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        /**
         * Get an individual role id from
         * the Sonar instance.
         * 
         * @param {Number} role_id 
         * @param {Function} callback 
         */
        role: function(role_id, callback) {
            // Build path
            let path = '/api/v1/roles/' + role_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        /**
         * Get an individual schedule from
         * the Sonar instance.
         * 
         * @param {Number} schedule_id 
         * @param {Function} callback 
         */
        schedule: function(schedule_id, callback) {
            // Build path
            let path = '/api/v1/scheduling/schedules/' + schedule_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        // Scheduled properties
        scheduled: {
            _path: '/api/v1/scheduling',

            /**
             * Get an individual scheduled event
             * from an account.
             * 
             * @param {Number} account_id 
             * @param {Number} event_id 
             * @param {Function} callback 
             */
            event: function(account_id, event_id, callback) {
                // Build path
                let path = '/api/v1/accounts/' + account_id + '/scheduled_events/' + event_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual schedule blocker
             * from the Sonar instance.
             * 
             * @param {Number} blocker_id 
             * @param {Function} callback 
             */
            blocker: function(blocker_id, callback) {
                // Build path
                let path = this._path + '/schedule_blockers/' + blocker_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual scheduled time off
             * from the Sonar instance.
             * 
             * @param {Number} timeOff_id 
             * @param {Function} callback 
             */
            timeOff: function(timeOff_id, callback) {
                // Build path
                let path = this._path + '/scheduled_time_offs/' + timeOff_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            }
        },

        system: {
            _path: '/api/v1/system',

            /**
             * Get an individual service from
             * the Sonar instance.
             * 
             * @param {Number} service_id 
             * @param {Function} callback 
             */
            service: function(service_id, callback) {
                // Build path
                let path = this._path + '/services/' + service_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual custom field
             * from the Sonar instance.
             * 
             * @param {Number} customField_id 
             * @param {Function} callback 
             */
            customField: function(customField_id, callback) {
                // Build path
                let path = this._path + '/custom_fields/' + customField_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual address type
             * from the sonar instance. 
             * 
             * @param {Number} type_id 
             * @param {Function} callback 
             */
            addressType: function(type_id, callback) {
                // Build path
                let path = this._path + '/address_types/' + type_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            // System billing properties
            billing: {
                __path: '/api/v1/system/usage_based_billing_policies',

                /**
                 * Get an individual usage based
                 * billing free period from the
                 * Sonar instance.
                 * 
                 * @param {Number} policy_id 
                 * @param {Number} freePeriod_id 
                 * @param {Function} callback 
                 */
                freePeriod: function(policy_id, freePeriod_id, callback) {
                    // Build path
                    let path = this.__path + '/' + policy_id + '/usage_based_billing_free_periods/' + freePeriod_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get an individual usage based
                 * billing policy from the Sonar
                 * instance. 
                 * 
                 * @param {Number} policy_id 
                 * @param {Function} callback 
                 */
                policy: function(policy_id, callback) {
                    // Build path
                    let path = this.__path + '/' + policy_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },
            },

            // System account properties
            account: {
                __path: '/api/v1/system',

                /**
                 * Get an individual account group
                 * from the Sonar instance. 
                 * 
                 * @param {Number} group_id 
                 * @param {Function} callback 
                 */
                group: function(group_id, callback) {
                    // Build path
                    let path = this.__path + '/account_groups/' + group_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get an individual account status
                 * from the Sonar instance.
                 * 
                 * @param {Number} status_id 
                 * @param {Function} callback 
                 */
                status: function(status_id, callback) {
                    // Build path
                    let path = this.__path + '/account_statuses/' + status_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },

                /**
                 * Get an individual account type
                 * from the Sonar instance.
                 * 
                 * @param {Number} type_id 
                 * @param {Function} callback 
                 */
                type: function(type_id, callback) {
                    // Build path
                    let path = this.__path + '/account_types/' + type_id;
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },
            }
        },

        /**
         * Get an individual task template from
         * the Sonar instance.
         * 
         * @param {Number} taskTemplate_id 
         * @param {Function} callback 
         */
        TaskTemplate: function(taskTemplate_id, callback) {
            // Build path
            let path = '/api/v1/system/misc/task_templates/' + taskTemplate_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        // Task template properties
        taskTemplate: {
            _path: '/api/v1/system/misc/task_templates',

            /**
             * Get an individual task from a
             * task template.
             * 
             * @param {Number} taskTemplate_id 
             * @param {Number} task_id 
             * @param {Function} callback 
             */
            task: function(taskTemplate_id, task_id, callback) {
                // Build path
                let path = this._path + '/' + taskTemplate_id + '/template_tasks/' + task_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },
        },

        /**
         * Get an individual task from an entity.
         * 
         * @param {String} entity 
         * @param {Number} entity_id 
         * @param {Number} task_id 
         * @param {Function} callback 
         */
        task: function(entity, entity_id, task_id, callback) {
            // Build path
            let path = '/api/v1/' + entity + '/' + entity_id + '/tasks/' + task_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        /**
         * Get an individual ticket from
         * the Sonar instance.
         * 
         * @param {Number} ticket_id 
         * @param {Function} callback 
         */
        Ticket: function(ticket_id, callback) {
            // Build path
            let path = '/api/v1/tickets/' + ticket_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        // Ticket properties
        ticket: {
            _path: '/api/v1/tickets',

            /**
             * Get an individual ticket category
             * from the Sonar instance. 
             * 
             * @param {Number} category_id 
             * @param {Function} callback 
             */
            category: function(category_id, callback) {
                // Build path
                let path = '/api/v1/system/tickets/ticket_categories/' + category_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual ticket group
             * from the Sonar instance.
             * 
             * @param {Number} group_id 
             * @param {Function} callback 
             */
            group: function(group_id, callback) {
                // Build path
                let path = '/api/v1/system/tickets/ticket_groups/' + group_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual ticket comment
             * from a ticket.
             * 
             * @param {Number} ticket_id 
             * @param {Number} comment_id 
             * @param {Function} callback 
             */
            comment: function(ticket_id, comment_id, callback) {
                // Build path
                let path = this._path + '/' + ticket_id + '/ticket_comments/' + comment_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },

            /**
             * Get an individual ticket reply
             * from a ticket.
             * 
             * @param {Number} ticket_id 
             * @param {Number} reply_id 
             * @param {Function} callback 
             */
            reply: function(ticket_id, reply_id, callback) {
                // Build path
                let path = this._path + '/' + ticket_id + '/ticket_replies/' + reply_id;
                // Make request
                return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
            },
        },

        /**
         * Get an individual user from the
         * Sonar instance.
         * 
         * @param {Number} user_id 
         * @param {Function} callback 
         */
        user: function(user_id, callback) {
            // Build path
            let path = '/api/v1/users/' + user_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },

        /**
         * Get an individual voice provider from
         * the Sonar instance.
         * 
         * @param {Number} voiceProvider_id 
         * @param {Function} callback 
         */
        voiceProvider: function(voiceProvider_id, callback) {
            // Build path
            let path = '/api/v1/system/voice/voice_providers/' + voiceProvider_id;
            // Make request
            return makeRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
        },
    };

    // Each "update" path of the Sonar API
    this.update = {

        /**
         * Update an account in the Sonar instance.
         * 
         * @param {Number} account_id
         * @param {Object} obj
         * @param {Function} callback
         */
        Account: function(account_id, obj, callback) {
            // Build path
            let path = '/api/v1/accounts/' + account_id;
            // Make request
            return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
        },

        // Update a property of an individual account
        account: {

            _path: '/api/v1/accounts',

            /**
             * Update an address from an individual account.
             * 
             * @param {Number} account_id
             * @param {Number} address_id
             * @param {Object} obj
             * @param {Function} callback
             */
            address: function(account_id, address_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/addresses/' + address_id;
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Update a call log from an individual account.
             * 
             * @param {Number} account_id
             * @param {Number} callLog_id
             * @param {Object} obj
             * @param {Function} callback
             */
            callLog: function(account_id, callLog_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/call_logs/' + callLog_id;
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Update an individual account contact.
             * 
             * @param {Number} account_id
             * @param {Number} contact_id
             * @param {Object} obj
             * @param {Function} callback
             */
            contact: function(account_id, contact_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/contacts/' + contact_id;
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Update an individual did from an account.
             * 
             * @param {Number} account_id
             * @param {Number} did_id
             * @param {Object} obj
             * @param {Function} callback
             */
            did: function(account_id, did_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/dids/' + did_id;
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Update data usage history on
             * an account.
             * 
             * @param {Number} account_id
             * @param {Object} obj
             * @param {Function} callback
             */
            dataUsageHistory: function(account_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/data_usage_histories';
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Update individual ip assignment
             * from an account.
             * 
             * @param {Number} account_id
             * @param {Number} ip_id
             * @param {Object} obj
             * @param {Function} callback
             */
            ipAssignment: function(account_id, ip_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/ip_assignments/' + ip_id;
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            // Invoice update functions
            invoice: {
                __path: '/api/v1/accounts',

                /**
                 * Void an invoice on an account.
                 * 
                 * @param {Number} account_id 
                 * @param {Number} invoice_id 
                 * @param {Function} callback 
                 */
                void: function(account_id, invoice_id, callback) {
                    // Build path
                    let path = this.__path + '/' + account_id + '/invoices/' + invoice_id + '/void';
                    // Make request
                    return makePatchRequestAndCreatePromise(connection_object.sonarHost, null, path, _sonarAuthHeader, callback);
                },

                /**
                 * Link a child invoice to a master
                 * invoice.
                 * 
                 * @param {Number} account_id 
                 * @param {Number} invoice_id
                 * @param {Object} obj
                 * @param {Function} callback 
                 */
                linkChild: function(account_id, invoice_id, obj, callback) {
                    // Build path
                    let path = this.__path + '/' + account_id + '/invoices/' + invoice_id + '/link';
                    // Make request
                    return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                }
            },

            /**
             * Update stored credit card of a
             * payment method on an account.
             * 
             * @param {Number} account_id
             * @param {Number} paymentMethod_id
             * @param {Function} callback
             */
            paymentMethod: function(account_id, paymentMethod_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/payment_methods/' + paymentMethod_id;
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Update the automatic payment setting
             * of a payment method on an account.
             * 
             * @param {Number} account_id 
             * @param {Number} paymentMethod_id 
             * @param {Object} obj 
             * @param {Function} callback 
             */
            toggleAutoPay: function(account_id, paymentMethod_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/payment_methods/' + paymentMethod_id + '/toggle_auto'
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Update an individual account service.
             * 
             * @param {Number} account_id
             * @param {Number} relationship_id
             * @param {Function} callback
             */
            service: function(account_id, relationship_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/services/' + relationship_id;
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            /**
             * Update an individual tax override
             * from an account.
             * 
             * (requires super user permissions)
             * 
             * @param {Number} account_id
             * @param {Number} taxOverride_id
             * @param {Object} obj
             * @param {Function} callback
             */
            taxOverride: function(account_id, taxOverride_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/account_tax_overrides/' + taxOverride_id;
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },

            // Transactions
            transactions: {

                __path: '/api/v1/accounts',

                // Transaction descriptions
                descriptions: {

                    ___path: '/api/v1/accounts',

                    /**
                     * Update an individual account debit
                     * description.
                     * 
                     * @param {Number} account_id
                     * @param {Number} debit_id
                     * @param {Object} obj
                     * @param {Function} callback
                     */
                    debit: function(account_id, debit_id, obj, callback) {
                        // Build path
                        let path = this.___path + '/' + account_id + '/transactions/debits/' + debit_id;
                        // Make request
                        return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                    },

                    /**
                     * Update an individual account discount
                     * description.
                     * 
                     * @param {Number} account_id
                     * @param {Number} discount_id
                     * @param {Object} obj
                     * @param {Function} callback
                     */
                    discount: function(account_id, discount_id, obj, callback) {
                        // Build path
                        let path = this.___path + '/' + account_id + '/transactions/discounts/' + discount_id;
                        // Make request
                        return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                    },
                },

                /**
                 * Get an individual account payment
                 * reference.
                 * 
                 * @param {Number} account_id
                 * @param {Number} payment_id
                 * @param {Object} obj
                 * @param {Function} callback
                 */
                payment: function(account_id, payment_id, obj, callback) {
                    // Build path
                    let path = this.__path + '/' + account_id + '/transactions/payments/' + payment_id;
                    // Make request
                    return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                }
            },

            /**
             * Update an individual contract from an account.
             * 
             * @param {Number} account_id 
             * @param {Number} contract_id
             * @param {Object} obj
             * @param {Function} callback 
             */
            contract: function(account_id, contract_id, obj, callback) {
                // Build path
                let path = this._path + '/' + account_id + '/contracts/' + contract_id;
                // Make request
                return makePatchRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
            },
        },
    };
}

module.exports = new function() {
    // Create a new instance of the Sonar object with
    // correct http sonar instance and admin credentials
    this.createClient = function(connection_object) {
        return new Sonar(connection_object);
    }
};