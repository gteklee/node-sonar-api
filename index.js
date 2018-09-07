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
             * @param {Number} model_id
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
/**/            addresses: function(networkSite_id, obj, callback) {
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
             * Get all custom fields 
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
                billingFreePeriods: function(policy_id, obj, callback) {
                    // Build path
                    let path = this.__path + '/usage_based_billing_policies/' + policy_id + '/usage_based_billing_free_periods';
                    // Make request
                    return makeRequestAndCreatePromise(connection_object.sonarHost, obj, path, _sonarAuthHeader, callback);
                },

                billingPolicies: function(obj, callback) {
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
}

module.exports = new function() {
    // Create a new instance of the Sonar object with
    // correct http sonar instance and admin credentials
    this.createClient = function(connection_object) {
        return new Sonar(connection_object);
    }
};